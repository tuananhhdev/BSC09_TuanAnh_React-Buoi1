import React from "react";
import "./ContentLayouts.css";
const ContentLayouts = () => {
  return (
    <div>
      <div className="content  row">
        <div className="content_items text-center col-4">
          <i class="fa-regular fa-file bg-primary text-white fs-2"></i>
          <h4 className="fw-bold mt-4 ">Fresh new layout</h4>
          <p className="mt-2">
            With Bootstrap 5, we've created a fresh <br /> new layout for this
            template!
          </p>
        </div>
        <div className="content_items text-center col-4">
          <i class="fa-solid fa-cloud-arrow-down bg-primary text-white fs-2"></i>
          <h4 className="fw-bold mt-4 ">Free to download</h4>
          <p className="mt-2">
            As always, Start Bootstrap has a <br /> powerful collectin of free
            templates.
          </p>
        </div>
        <div className="content_items text-center col-4">
          <i class="fa-regular fa-newspaper bg-primary text-white fs-2"></i>
          <h4 className="fw-bold mt-4 ">Jumbotron hero header</h4>
          <p className="mt-2">
            The heroic part of this template is the <br /> jumbotron hero
            header!
          </p>
        </div>
        <div className="content_items text-center col-4">
          <i class="fa-solid fa-b bg-primary text-white fs-2"></i>
          <h4 className="fw-bold mt-4 ">Feature boxes</h4>
          <p className="mt-2">
            We've created some custom feature <br /> boxes using Bootstrap
            icons!
          </p>
        </div>
        <div className="content_items text-center col-4">
          <i class="fa-solid fa-code bg-primary text-white fs-2"></i>
          <h4 className="fw-bold mt-4 ">Simple clean code</h4>
          <p className="mt-2">
            We keep our dependencies up to date <br /> and squash bugs as they
            come!
          </p>
        </div>
        <div className="content_items text-center col-4">
          <i class="fa-solid fa-check bg-primary text-white fs-2"></i>
          <h4 className="fw-bold mt-4 ">A name you trust</h4>
          <p className="mt-2">
            Start Bootstrap has been the leader in <br /> free Bootstrap
            templates since 2013!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentLayouts;
