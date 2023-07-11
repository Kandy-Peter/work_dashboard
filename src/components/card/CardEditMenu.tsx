import React from "react";
import Dropdown from "components/dropdown";
import { BsThreeDots } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
// import EditProfilModal from "components/modal/EditProfilModal";
// import { on } from "events";

function CardEditMenu(props: { transparent?: boolean, onEdit?: () => void }) {

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
                : "bg-lightPrimary p-2 text-cyan-500 hover:bg-gray-100 dark:bg-sky-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
            } linear justify-center rounded-lg font-bold transition duration-200`}
          >
            <BsThreeDots className="h-6 w-6" />
          </button>
        }
        animation={"origin-top-right transition-all duration-300 ease-in-out"}
        classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
        children={
          <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
            <button
              onClick={props.onEdit}
              className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium  ease-linear transition-all duration-150"
            >
              <span>
                <AiFillEdit />
              </span>
              Edit
            </button>
          </div>
        }
      />
    </>
  );
}

export default CardEditMenu;
