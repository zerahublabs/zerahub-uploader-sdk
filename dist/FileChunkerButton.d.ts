import React from "react";
import { FileChunk } from "./useFileChuncker";
interface FileChunkerButtonProps {
    onProcess: () => FileChunk[] | void;
    disabled?: boolean;
    className?: string;
}
declare const FileChunkerButton: React.FC<FileChunkerButtonProps>;
export default FileChunkerButton;
//# sourceMappingURL=FileChunkerButton.d.ts.map