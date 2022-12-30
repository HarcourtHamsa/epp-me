import React from "react";
import { ButtonType } from "../types";

function Button({ label }: ButtonType) {
  return <button className="bg-purple-700 hover:bg-purple-800 h-12 px-6 rounded-lg w-full font-medium text-white text-sm shadow-md">{label}</button>;
}

export default Button;
