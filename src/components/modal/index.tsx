import React from "react";

function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, onClose: () => void) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);
}

const Modal = (props: {
  button: JSX.Element;
  children: JSX.Element;
  classNames: string;
  onClose: () => void;
  handleUpload: () => void;
  animation?: string;
}) => {
  const { button, children, classNames, onClose, animation, handleUpload } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  useOutsideAlerter(wrapperRef, onClose);

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpen(true)}>
        {button}
      </div>
      {open && (
        <div
        className={`${classNames} fixed z-10 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${open ? "scale-100" : "scale-0"}`}
        >
          <div className="bg-white p-4 rounded-md shadow-md">
            {children}
            <div className="flex justify-between">
            <button
              className="hover:bg-red-50 text-red-600 px-4 py-2 mt-4"
              onClick={() => {
                setOpen(false);
                onClose();
              }}
            >
              Cancel
            </button>
            <button
              className="text-white px-4 py-2 mt-4 bg-sky-500 hover:bg-sky-600 rounded-md"
              onClick={handleUpload}
            >
              Upload
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
