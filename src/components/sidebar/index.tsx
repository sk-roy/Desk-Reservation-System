import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import ReservationIcon from "../../assets/icons/ReservationIcon.svg";
import AnalyticsIcon from "../../assets/icons/AnalyticsIcon.svg";
import TeamIcon from "../../assets/icons/TeamIcon.svg"
import LocationIcon from "../../assets/icons/LocationIcon.svg"
import profileIcon from "../../assets/icons/profileIcon.svg"
import logo from "../../assets/icons/logo.svg"
import { Avatar, Image, List, Typography } from "antd";
import { CustomStyles } from "../../theme";
import { HomeOutlined } from "@ant-design/icons";


export const Logo = () => {
    return (       
        <div
        style={{ display: "flex", flexDirection: "row", }}>
            <div 
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:"center",
                paddingLeft:2,
                paddingRight:2,

            }}
            >
                <img
                src={logo}
                alt='enosis'/>

                <Typography 
                style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    margin: '2px',
                    color: CustomStyles.Color.Primary.White,
                }}>
                    DRS
                </Typography>

                <Typography
                
                style={{

                    fontWeight: 400,
                    fontSize: "18px",
                    margin: '2px',
                    color: CustomStyles.Color.OffWhite[5],
                    justifyItems: "center",

                }}> | </Typography>
                    
                <div 
                style={{
                    display: "flex", 
                    flexDirection: "column", 
                    justifyItems: "flex-start", 
                    margin: "5px"
                }} >                        
                    <Typography  
                    style={{ 
                        color: "#B4C5D9",
                        fontSize: 8
                    }}>
                        Desk Reservation
                    </Typography>
                    <Typography 
                    style={{ 
                        color: "#B4C5D9",
                        fontSize: 8,
                    }}>
                        System
                    </Typography>
                </div>
            </div>
        </div>
    );
}

const Profile = () => {
    return (        
    <div // profile */}
    style={{
        display: "flex",
        alignItems: "center",
        color: "black",
        backgroundColor: "white",
        justifyContent: "space-between",
        padding: "14px",
        borderRadius: "8px",
        height: "48px",
        width: "180px",
    }}>
        <div
        style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 8,
        }}>
            <Avatar 
            style={{ 
                backgroundColor: CustomStyles.Color.Alert.Green,
                verticalAlign: 'middle',
                width: "24px",
                height: "24px",
            }}> B </Avatar>
            <Typography.Text>Brian O'Conor</Typography.Text>
        </div>    
        <div
        style={{
            display: "flex",
            padding: "1px",
        }}>         
            <img
                src={profileIcon}
                alt="Brian O'Conor"
                style={{
                    width: "10px",
            }}/>   
        </div>                
    </div>
    );
}


const TabList = ["Home", "Reservation", "Analytics", "DRS Team", "Location"];

const GetIcon = (tabName: string) => {
    if (tabName === 'Home') return <HomeOutlined/>;
    return <HomeOutlined/>;
}

const getIndex = (path: any) => {
    const currentPage =  String(path).substring(1);
    console.log(currentPage)

    if (currentPage === "booking") return 1;
    else if (currentPage === "analytics") return 2;
    else if (currentPage === "team") return 3;
    else if (currentPage === "location") return 4;
    else return 0;
}

const TabBox = () => {    
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
    
    const getItemIcon = (index: number) => {
        if (index === 1) return ReservationIcon;
        if (index === 2) return AnalyticsIcon;
        if (index === 3) return TeamIcon;
        if (index === 4) return LocationIcon;
        return HomeIcon;  // index 0 for Home
    };

    return (
        <List
        // style={{
        //     gap: "10px",
        //     height: `calc(100% - 48px)`,
        // }}
        >
        {TabList.map((tabName, index) => (
            <List.Item key={tabName}
                    onClick={() => {
                        updateSelectedTab(index)
                        navigateSelectedTab(index)
                    }}
                    // style={{
                    // width: "210px",
                    // maxHeight: "46px",
                    // borderRadius: "6px",
                    // }}             
                >
                    <div
                    style={{
                        // display: "flex",
                        // alignItems: "center",
                        // gap: 14,
                        // height: "46px",
                        // width: "100%",
                        // // borderRadius: "6px",
                        // padding: "12px 16px 12px 16px",
                        // borderRadius: "6px",
                        // backgroundColor: selectedTab === index ? CustomStyles.Color.Primary.Blue : "#212B36",
                    }}>
                        <img src={getItemIcon(index)} alt={tabName}/>
                        <Typography 
                        // style={{ 
                        //     fontSize: "13px",
                        //     color: selectedTab === index ? CustomStyles.Color.Primary.White : CustomStyles.Color.OffWhite[5],
                        // }}
                        >
                            {tabName}
                        </Typography>
                    </div>
            </List.Item>
        ))}
        </List>
    );
}


const Sidebar = () => {
    return (
        <div
        style={{
            backgroundColor: CustomStyles.Color.Primary.Dark,
            padding: "16px 12px 16px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            gap: 32,
        }}>
            <Logo/>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}>
                <TabBox/>                
                <Profile/>
            </div>
         </div>
    );
}

export default Sidebar;