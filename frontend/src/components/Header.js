import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="fixed shadow-md w-full h-16 px-4 md:px-4 ">
      <div className="flex items-center h-full justify-between">
              <div className="akas absolute text-center bg-slate-400  py-3 px-3  shadow-lg flex rounded ">
                <Link
                  to={"login"}
                  className="whitespace-nowrap cursor-pointer pb-3"
                >
                  Login
                </Link>
              </div>
       </div>
    </header>
  );
}

export default Header;
