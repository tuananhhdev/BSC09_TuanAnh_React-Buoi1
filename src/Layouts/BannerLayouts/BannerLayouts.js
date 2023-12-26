import React from "react";
import "./BannerLayouts.css";
const BannerLayouts = () => {
  return (
    <div className=" banner text-center">
      <h1 className="fw-bold">A warm welcome!</h1>
      <h4 className="fw-normal fs-4 mt-3 mb-4">
        Bootstrap utility classes are used to create this jumbotron since the
        old component has been <br /> removed from the framework. Why create
        custom CSS when you can use utilities?
      </h4>
      <button className="bg-primary border text-white fs-4">
        Call to action
      </button>
    </div>
  );
};

export default BannerLayouts;
