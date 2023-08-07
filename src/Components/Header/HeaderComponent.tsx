import React from "react";
import {
  Header,
  Label,
  LabelProps,
  Menu,
  MenuItem,
  Space,
} from "@looker/components";

interface HeaderComponentProps {
  menuList: any;
  changeMenu: any;
}

export default function HeaderComponent(
  props: HeaderComponentProps & LabelProps
) {
  const { menuList, ...restProps } = props;
  const menuStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "1.05rem",
    backgroundColor: "#1a73e8",
    border: "hidden",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };
  const iconStyles = {
    color: "#1a73e8",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  };
  const linkStyles = {
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "1.3rem",
    fontWeight: 600,
    padding: "10px",
    border: "1px solid orange",
    borderRadius: "4px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  };
  const menuItems = menuList.map((value: any) => (
    <Menu
      content={
        value.subMenus.length != 0
          ? value.subMenus.map((subMenuValue: any) =>
              subMenuValue.items.length != 0 ? (
                <>
                  <MenuItem
                    onClick={() => props.changeMenu(subMenuValue.items[0])}
                    nestedMenu={
                      subMenuValue.items.length != 0 &&
                      subMenuValue.items[0].item.length != 0
                        ? subMenuValue.items.map((itemValue: any) => (
                            <>
                              <MenuItem
                                onClick={() => props.changeMenu(itemValue)}
                              >
                                {itemValue.item}
                              </MenuItem>
                            </>
                          ))
                        : null
                    }
                  >
                    {subMenuValue.subMenu}
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => props.changeMenu({ tabs: [], item: "item" })}
                  >
                    {subMenuValue.subMenu}
                  </MenuItem>
                </>
              )
            )
          : null
      }
    >
      <Label {...restProps}>
        <span style={menuStyles}>{value.menu}</span>
      </Label>
    </Menu>
  ));
  return (
    <Header
      height="4rem"
      px="large"
      style={{ borderBottom: "1px solid #e8e8e8" }}
    >
      <Space justify="start">
        <Label
          {...restProps}
          onClick={() => props.changeMenu({ tabs: [], item: "" })}
        >
          <span style={iconStyles}>AHCT Reporting Portal</span>
        </Label>
        <Label>
          <span style={linkStyles}>
            <a
              href="https://apps.use2.us-gov-pure.cloud/directory/#/analytics/dashboards/69d39d07-d580-444e-82de-417a5b3ba8e7?tabId=b51d82fc-2f7f-4b79-a0ee-cf9d6da5086f"
              target="_blank"
            >
              <img
                src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/genesys-redAdaptiveGLogo.png"
                width="100px"
                height="20"
              />
            </a>
          </span>
        </Label>
      </Space>
      <Space justify="end">
        {menuItems}
        <img
          src="https://www.ttec.com/sites/all/themes/main/logos/ttec-logo-40th.png"
          alt="display image"
          height={30}
        />
      </Space>
    </Header>
  );
}
