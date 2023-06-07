import React, { useState } from "react";

const readOrEditInput = (
  isEditable: boolean,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputType: string = "text"
) => {
  if (isEditable) {
    return (
      <input
        type={inputType}
        className="ml-2 text-sm text-gray-700 dark:text-white"
        value={value}
        onChange={onChange}
      />
    );
  } else {
    return (
      <span className="text-sm ml-2 text-gray-700 dark:text-white">{value}</span>
    );
  }
};

export default readOrEditInput;
