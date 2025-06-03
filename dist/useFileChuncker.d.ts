export interface FileChunk {
    index: number;
    chunk: Blob;
    size: number;
    start: number;
    end: number;
}
declare function useFileChunker(baseUrl: string, collectionId: string, bearer: string, chunkSize?: number): {
    file: File | null;
    setFile: (f: File) => void;
    processChunks: () => Promise<void>;
};
export default useFileChunker;
//# sourceMappingURL=useFileChuncker.d.ts.map