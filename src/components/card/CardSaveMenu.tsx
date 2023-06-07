import React from "react";
import Dropdown from "components/dropdown";
import { BsCheckLg } from "react-icons/bs";
import { AiFillCheckCircle, AiFillBackward } from "react-icons/ai";

function CardSaveMenu(props: { transparent?: boolean, onCancel?: () => void, onSave?: () => void }) {
  
  const { transparent } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Dropdown
        button={
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center text-xl hover:cursor-pointer ${
              transparent
                ? "bg-none text-white hover:bg-none active:bg-none"
                : "bg-green-50 p-2 text-green-500 hover:bg-green-100 dark:bg-sky-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
            } linear justify-center rounded-lg font-bold transition duration-200`}
          >
            <BsCheckLg className="h-6 w-6" />
          </button>
        }
        animation={"origin-top-right transition-all duration-300 ease-in-out"}
        classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
        children={
          <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
            <button
              onClick={props.onCancel}
              className="hover:text-black flex cursor-pointer items-center gap-4 my-1 text-red-600 hover:font-medium  ease-linear transition-all duration-150"
            >
              <span>
                <AiFillBackward />
              </span>
              Cancel
            </button>
            <button
              onClick={props.onSave}
              className="hover:text-black flex cursor-pointer items-center gap-2 my-1 text-green-600 hover:font-medium  ease-linear transition-all duration-150"
            >
              <span>
                <AiFillCheckCircle />
              </span>
              Save
            </button>
          </div>
        }
      />
    </>
  );
}

export default CardSaveMenu;
