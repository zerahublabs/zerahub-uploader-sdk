import React from "react";
import { FileChunk } from "./useFileChuncker";

interface FileChunkerButtonProps {
  onProcess: () => FileChunk[] | void;
  disabled?: boolean;
  className?: string;
}

const FileChunkerButton: React.FC<FileChunkerButtonProps> = ({
  onProcess,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`${className}`}
      onClick={() => onProcess()}
      disabled={disabled}
    >
      Proses File
    </button>
  );
};

export default FileChunkerButton;
