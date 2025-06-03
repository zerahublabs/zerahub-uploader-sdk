import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

export interface FileChunk {
  index: number;
  chunk: Blob;
  size: number;
  start: number;
  end: number;
}

function stringTo1KBBuffer(input: string): Buffer {
  const encoded = Buffer.from(input, "utf-8");
  const targetSize = 1024;

  if (encoded.length > targetSize) {
    throw new Error("Input string is too large to fit in 1KB buffer.");
  }

  const padded = Buffer.alloc(targetSize, "%"); // default padding with '%'
  encoded.copy(padded, 0); // copy the original buffer into the start of the padded buffer
  return padded;
}

function useFileChunker(
  baseUrl: string,
  collectionId: string,
  bearer: string,
  chunkSize: number = 1024 * 1024
) {
  const [file, setFile] = useState<File | null>(null);
  // const [chunks, setChunks] = useState<FileChunk[]>([]);

  let url = "";

  if (baseUrl.endsWith("/")) {
    url = baseUrl + "collection/" + collectionId + "/upload-dataset";
  } else {
    url = baseUrl + "/collection/" + collectionId + "/upload-dataset";
  }

  const headers = {
    Authorization: "Bearer " + bearer,
  };

  const handleFile = (f: File) => setFile(f);

  const processChunks = async () => {
    if (!file) return;

    let start = 0,
      index = 0;

    while (start < file.size) {
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);
      let chunkArrayBuffer = Buffer.from(await chunk.arrayBuffer());

      if (index === 0) {
        chunkArrayBuffer = Buffer.concat([
          stringTo1KBBuffer(file.name),
          chunkArrayBuffer,
        ]);
      }

      await axios.post(url, chunkArrayBuffer, {
        headers,
      });

      start = end;
      index++;
    }

    await axios.post(url + "?finish=true", Buffer.alloc(0), {
      headers,
    });
  };

  return { file, setFile: handleFile, processChunks };
}

export default useFileChunker;
