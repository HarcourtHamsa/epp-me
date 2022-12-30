import React from "react";

function Menu() {
  return (
    <div className="cursor-pointer flex flex-col gap-1" tabIndex={0}>
      <div className="w-6  bg-black" style={{ height: "2px" }}></div>
      <div className="w-6  bg-black" style={{ height: "2px" }}></div>
      <div className="w-6  bg-black" style={{ height: "2px" }}></div>
    </div>
  );
}

export default Menu;
