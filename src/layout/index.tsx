import { ReactNode, useState } from "react";
import React from "react";
import { Button, ConfigProvider, Layout, Menu, MenuProps, Typography, theme } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";
import Icon from "@ant-design/icons/lib/components/Icon";
import HomeIcon from "../components/icons/HomeIcon";
import ReservationIcon from "../components/icons/ReservationIcon";
import { icons } from "antd/es/image/PreviewGroup";
import AnalyticsIcon from "../components/icons/AnalyticsIcon";
import TeamIcon from "../components/icons/TeamIcon";
import LocationIcon from "../components/icons/LocationIcon";
import { CustomStyles } from "../theme";
import { Logo } from "../components/sidebar";
import RightArrowIcon from "../components/icons/RightArrowIcon";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
const { Content, Sider } = Layout;


interface LayoutProps {
    children: ReactNode
}

const menuItems = [
  { key: '0', label: 'Home', icon: HomeIcon },
  { key: '1', label: 'Reservation', icon: ReservationIcon },
  { key: '2', label: 'Analytics', icon: AnalyticsIcon },
  { key: '3', label: 'DRS Team', icon: TeamIcon },
  { key: '4', label: 'Location', icon: LocationIcon },
];

const getIndex = (path: any) => {
    const currentPage =  String(path).substring(1);
    console.log(currentPage)

    if (currentPage === "booking") return '1';
    else if (currentPage === "analytics") return '2';
    else if (currentPage === "team") return '3';
    else if (currentPage === "location") return '4';
    else return '0';
}


const CustomLayout = ({ children }: LayoutProps) => {
  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const nagigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  
  const [selectedTab, updateSelectedTab] = useState(getIndex(location.pathname))

  const navigateSelectedTab = (index: number) => {
      if (index === 1) return nagigate("/booking");
      if (index === 2) return nagigate("/analytics");
      if (index === 3) return nagigate("/team");
      if (index === 4) return nagigate("/location");
      return nagigate("/"); // index 0 for Home
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

    // Custom trigger button
    const customTrigger = (
      <Button onClick={toggleCollapse}
      style={{
        backgroundColor: "transparent",
        height: "22px",
        width: "22px",
        border: "transparent",
        padding: "2px",
      }}>
        {collapsed ? <RightArrowIcon/> : <LeftArrowIcon/>}
      </Button>
    );
  

  return (
    <Layout style={{ minHeight: '100vh' }}>        
      <Sider collapsible collapsed={collapsed} trigger={null}
      style={{
        padding: '16px 12px 16px 12px',
      }}>
        <Logo collapsed={collapsed}/>
        
        <div 
        style = {{ 
          position: "absolute",
          top: "35px",
          right: "-11px",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "22px", 
          width: "22px", 
          backgroundColor: CustomStyles.Color.Primary.Dark, 
          borderRadius: "40px",
          border: "1px solid var(--Offwhite-Offwhite-1, #F9FAFB)"
        }}>
          {customTrigger}
        </div>
        <Menu 
        theme="dark" 
        defaultSelectedKeys={[selectedTab]} 
        mode="inline"
        style={{
          gap: 6,
        }}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key} 
              onClick={() => {
                updateSelectedTab(item.key);
                navigateSelectedTab(Number(item.key));
              }}>
              <Icon component={item.icon} />
              <span style={{
                fontSize: 13,
                fontWeight: selectedTab === item.key ? 600 : 500,
              }}>{item.label}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      
      <Layout>
        <Content>
          <div style={{ width: "100%", overflowY: "hidden" }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
