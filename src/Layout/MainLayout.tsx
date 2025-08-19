import React from "react";
import { useState } from "react";
import {
  ComponentsProvider,
  Page,
  Layout,
  Section,
  Footer,
  LayoutProps,
} from "@looker/components";
// import Header from "../Components/Header/HeaderComponent";
// import Tabs from "../Components/Tab/TabComponent";
// import { menuList } from "./MenuList";
import Home from "../Home";
// import underConstuction from "../Images/under_construction.png";

export default function MainLayout(props: LayoutProps) {
  const [currentMenu, setCurrentMenu] = useState({ tabs: [], item: "" });
  const changeMenu = (values: any) => {
    setCurrentMenu(values);
  };

  return (
    <ComponentsProvider>
      <Home></Home>
    </ComponentsProvider>
  );
}
