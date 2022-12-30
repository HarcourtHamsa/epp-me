import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { InputTypeStrings } from "../types";

function SearchBar() {
  return (
    <div className="flex items-center h-10 px-4 bg-gray-50 rounded-md ">
      <RiSearchLine />
      <input
        className="text-sm w-full h-full bg-transparent pl-2 outline-none "
        placeholder="Search"
        type={InputTypeStrings.text}
      />
    </div>
  );
}

export default SearchBar;
