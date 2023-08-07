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
        <Footer style={{backgroundColor:"#1a73e8",color:"white", padding: "4px 20px 17px 20px"}} >
          <p>In case of issues/incidents or new requests over specific reports,
          please log into AskNow for raising the needed ticket by clicking{" "}
          <a style={{color:"white"}}  target="_blank" href="https://asknow.service-now.com/asknow?id=sc_cat_item&sys_id=4f79525adbcc8740958bf9a41d9619b8">
            here
          </a>
          . In case of any doubts when generating the tickets, please refer to
          the following{" "}
          <a style={{color:"white"}} target="_blank" href="https://teletechinc.sharepoint.com/:w:/s/enterpriseintelligence/EUFXiPqWlbhNgKNiPwjOO9kB6rP7UTrF-2pRb7KpiW8kDw?e=FYKMPh&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzA1MDEwMDQyMiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D">
            Work Instruction
          </a>
          </p>
        </Footer>
      </Page>
    </ComponentsProvider>
  );
}
