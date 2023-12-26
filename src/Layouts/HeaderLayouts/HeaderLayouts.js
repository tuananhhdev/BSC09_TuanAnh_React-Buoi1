import React from "react";
import "./HeaderLayouts.css";
const HeaderLayouts = () => {
  return (
    <div>
      <nav>
        <div className="text-capitalize d-flex justify-content-around align-items-center">
          <div className="logo">
            <h3 className="text-white">start bootstrap</h3>
          </div>
          <div className="list_menu fs-5">
            <ul className="d-flex">
              <li className="text-white">home</li>
              <li className=" text-secondary">about</li>
              <li className=" text-secondary">contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderLayouts;
