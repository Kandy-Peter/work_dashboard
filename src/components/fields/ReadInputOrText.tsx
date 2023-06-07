import React from "react";

const readOrEditInput = (
  isEditable: boolean,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  // inputType: string,
  id: string,
) => {
  if (isEditable) {
    return (
      <input
        type="text"
        className="ml-2 text-sm text-gray-700 dark:text-white"
        defaultValue={value}
        onChange={onChange}
        id={id}
      />
    );
  } else {
    return (
      <span className="text-sm ml-2 text-gray-700 dark:text-white">{value}</span>
    );
  }
};

export default readOrEditInput;
