import React from "react";
import formatDate from "helpers/DateFormat";

const readOrEditInput = (
  isEditable: boolean,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  id: string,
  inputType?: string,
) => {
  if (isEditable) {
    return (
      <input
        type={inputType || "text"}
        className="ml-2 text-sm text-gray-700 dark:text-white p-1/2 outline-none w-1/2 border border-gray-300 dark:border-gray-700"
        defaultValue={value}
        onChange={onChange}
        id={id}
      />
    );
  } else {
    return (
      inputType === "date" ?
        <span className="text-sm ml-2 text-gray-700 dark:text-white">{formatDate(value)}</span>
        :
        <span className="text-sm ml-2 text-gray-700 dark:text-white">{value}</span>
    );
  }
};

export default readOrEditInput;
