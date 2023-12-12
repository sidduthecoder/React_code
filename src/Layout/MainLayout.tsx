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
import Header from "../Components/Header/HeaderComponent";
import Tabs from "../Components/Tab/TabComponent";
import { menuList } from "./MenuList";
import Home from "../Home";
import underConstuction from "../Images/under_construction.png";

export default function MainLayout(props: LayoutProps) {
  const [currentMenu, setCurrentMenu] = useState({ tabs: [], item: "" });
  const changeMenu = (values: any) => {
    setCurrentMenu(values);
  };

  return (
    <ComponentsProvider>
      <Page>
        <Header menuList={menuList} changeMenu={changeMenu} />
        <Layout>
          <Section style={{ paddingTop: "10px" }}>
            {currentMenu.tabs.length == 0 ? (
              currentMenu.item != "" ? (
                <div style={{ textAlign: "center" }}>
                  <img
                    width="60%"
                    height="500vh"
                    src="https://raw.githubusercontent.com/khajamoh/looker-assets/main/No%20Permission%20Image.png"
                  />
                </div>
              ) : (
                <Home />
              )
            ) : (
              <Tabs currentMenu={currentMenu} />
            )}
          </Section>
        </Layout>
        <Footer style={{backgroundColor:"#1a73e8",color:"white", padding: "0px 0px 0px 80px"}} >
        <p>In case of issues / incidents or new requests over specific reports, please log into AskNow for raising the needed ticket by clicking  {" "}
          <a style={{color:"white"}}  target="_blank" href="https://asknow.service-now.com/asknow?id=asknow_sc_cat_item&sys_id=bec6a503874e29dc97c8646d8bbb3597&sysparm_category=d866a94b87ca29dc97c8646d8bbb35a1">
           
            <img
                src="https://asknow.service-now.com/aa893c6e8709ddd897c8646d8bbb3525.iix"
                width="100px"
                height="20"
                
              />
          </a>
          
          </p>
        </Footer>
      </Page>
    </ComponentsProvider>
  );
}
