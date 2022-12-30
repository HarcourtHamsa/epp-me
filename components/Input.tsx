import React, { useState } from "react";
import { InputType, InputTypeStrings } from "../types";

function Input({ placeholder, type, label }: InputType) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      {label && <label className="text-sm">{label}</label>}

      {type === InputTypeStrings.password ? (
        <div
          className="flex items-center mt-0  w-full border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-12"
        >
          <input
            placeholder={placeholder}
            type={isVisible ? InputTypeStrings.text : InputTypeStrings.password}
            className="bg-transparent focus:outline-0 h-full ml-0 w-full px-4"
          />
          <p
            className="text-gray-400 text-xs cursor-pointer h-full flex items-center px-2"
            onClick={toggleVisibility}
          >
            Show
          </p>
        </div>
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          className="mt-1 block w-full py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 space-x-3 h-12 px-4"
        />
      )}
    </div>
  );
}

export default Input;
