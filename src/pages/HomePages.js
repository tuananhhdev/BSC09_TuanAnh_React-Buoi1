import React from "react";
import HeaderLayouts from "../Layouts/HeaderLayouts/HeaderLayouts";
import BannerLayouts from "../Layouts/BannerLayouts/BannerLayouts";
import ContentLayouts from "../Layouts/ContentLayouts/ContentLayouts";
import FooterLayouts from "../Layouts/FooterLayouts/FooterLayouts";

const HomePages = () => {
  return (
    <div>
      <HeaderLayouts />
      <BannerLayouts />
      <ContentLayouts />
      <FooterLayouts />
    </div>
  );
};

export default HomePages;
