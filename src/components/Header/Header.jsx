import React, { memo } from "react";
import { MenuBurger } from "./MenuBurger/MenuBurger";
import { Profile } from "./Profile/Profile";
import { MyStorage } from "./MyStorage/MyStorage";
import { Marketplaces } from "./Marketplaces/Marketplaces";
import { Search } from "./Search/Search";
import { DarkLightMode } from "./DarkLightMode/DarkLightMode";
import { Toolbar } from "./Toolbar/Toolbar";
import { SeparatorWhite } from "../UI/Separators/SeparatorWhite/SeparatorWhite";
import "./Header.css";

export const Header = memo(() => {
  return (
    <div className="header d-flex flex-column">
      <div className="container-xxl d-flex align-items-center mt-6">
        <MenuBurger />
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-stretch">
            <div className="header-menu align-items-stretch">
              <div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-700 menu-state-primary menu-arrow-gray-400 fw-semibold my-5 my-lg-0 align-items-stretch px-2 px-lg-0">
                <MyStorage />
                <Marketplaces />
              </div>
            </div>
          </div>
          <div className="topbar d-flex align-items-stretch flex-shrink-0 px-11">
            <Search />
            <DarkLightMode />
            <Profile />
          </div>
        </div>
      </div>
      <SeparatorWhite />
      <Toolbar />
    </div>
  );
});
