import { jsx as _jsx } from "react/jsx-runtime";
const FileInput = ({ onFileSelect }) => {
    return (_jsx("input", { type: "file", onChange: (e) => {
            const file = e.target.files?.[0];
            if (file)
                onFileSelect(file);
        } }));
};
export default FileInput;
