import React from "react";
import { MdFileUpload } from "react-icons/md";

interface FileUploadProps {
  maxFiles?: number;
  size?: number;
  formats?: string[];
  setImage: React.Dispatch< React.SetStateAction<{ preview: string; raw: File | null; }>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ maxFiles, size, formats, setImage }) => {
  const [dragging, setDragging] = React.useState(false);
  const [fileError, setFileError] = React.useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    if (maxFiles && files.length > maxFiles) {
      setFileError(true);
      return;
    }
    const file = files[0];
    const fileExtension = file.name.split(".").pop();
    if (!formats?.includes(fileExtension || "")) {
      setFileError(true);
      return;
    }
    if (file.size > (size || 5) * 1024 * 1024) {
      setFileError(true);
      return;
    }
    setFileError(false);
    setImage({
      preview: URL.createObjectURL(file),
      raw: file,
    });
  };

  return (
    <div
      className={`col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:bg-sky-500 2xl:col-span-6 p-2 ${
        dragging ? "border-cyan-500" : "border-gray-200 dark:border-sky-300"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label
        htmlFor="file-upload"
        className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:border-sky-700 lg:pb-0 cursor-pointer dark:border-sky-300"
      >
        <MdFileUpload className="text-[80px] text-cyan-500 dark:text-white" />
        <h4 className="text-xl font-bold text-cyan-500 dark:text-white">
          Upload Files
        </h4>
        <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-100">
          {`${formats.join(", ")} files are allowed, up to ${size} MB`}
        </p>
        {fileError && (
          <p className="mt-2 text-sm font-medium text-red-500">
            Invalid file format or size exceeded.
          </p>
        )}
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept={formats.map((format) => `.${format}`).join(",")}
          onChange={(e) => handleFiles(e.target.files)}
          multiple={false}
        />
      </label>
    </div>
  );
};

export default FileUpload;
