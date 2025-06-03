import { jsx as _jsx } from "react/jsx-runtime";
const FileChunkerButton = ({ onProcess, disabled = false, className = "", }) => {
    return (_jsx("button", { className: `${className}`, onClick: () => onProcess(), disabled: disabled, children: "Proses File" }));
};
export default FileChunkerButton;
