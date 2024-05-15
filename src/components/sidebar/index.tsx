import { Avatar, Box, Hidden, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import ReservationIcon from "../../assets/icons/ReservationIcon.svg";
import AnalyticsIcon from "../../assets/icons/AnalyticsIcon.svg";
import TeamIcon from "../../assets/icons/TeamIcon.svg"
import profileIcon from "../../assets/icons/profileIcon.svg"
import logo from "../../assets/icons/logo.svg"


const TabList = ["Home", "Reservation", "Analytics", "DRS Team"];

const getIndex = (path: any) => {
    const currentPage =  String(path).substring(1);
    console.log(currentPage)

    if (currentPage === "booking") return 1;
    else if (currentPage === "analytics") return 2;
    else if (currentPage === "team") return 3;
    else return 0;
}


const Sidebar = () => {
    const nagigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);
    const [selectedTab, updateSelectedTab] = useState(getIndex(location.pathname))

    const navigateSelectedTab = (index: number) => {
        if (index === 0) return nagigate("/");
        if (index === 1) return nagigate("/booking");
        if (index === 2) return nagigate("/analytics");
        return nagigate("/team"); // index 3
    };
    
    const getItemIcon = (index: number) => {
        if (index === 0) return HomeIcon;
        if (index === 1) return ReservationIcon;
        if (index === 2) return AnalyticsIcon;
        return TeamIcon;  // index 3
    };

    return (
        <Box
        sx={{
            backgroundColor: "#212B36",
            padding: 2,
            display: "flex",
            flexDirection: {
                xs: "row",
                lg: "column",
            },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 900,
            gap: 5
        }}>
            
            <Box    // logo
                flexDirection="row">
                    <Box 
                    display='flex'
                    flexDirection='row'
                    alignItems="center"
                    paddingLeft={2}
                    paddingRight={2}
                    >
                        <img
                        src={logo}
                        alt='enosis'/>

                        <Typography 
                        variant="h5" 
                        component="h1"
                        my={2}
                        color="white"
                        margin='5px'
                        fontWeight={400}
                        fontSize={18}>
                            RAC
                        </Typography>

                        <Typography variant="h5" 
                        component="h1"
                        my={2}
                        color="white"
                        fontWeight={400}
                        fontSize={18}
                        >                        
                            |
                        </Typography>
                        
                        <Stack
                        margin='5px'>                        
                            <Typography  
                            component="p"
                            color="#B4C5D9"
                            fontSize={8}>
                                Rent-A
                            </Typography>
                            <Typography 
                            component="p"
                            color="#B4C5D9"
                            fontSize={8}>
                                Car
                            </Typography>
                        </Stack>
                    </Box>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "row",
                    lg: "column",
                },
                gap: 5,
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
                // padding: "10px",
                // backgroundColor: "gray"
            }}>
                <List
                sx={{
                    gap: "10px",
                    height: `calc(100% - 48px)`,
                    // bgcolor: "gray",
                    px: "0",
                }}
                >
                {TabList.map((tabName, index) => (
                    <ListItem key={tabName} disablePadding={true} sx={{ gap: "14px" }}>
                        <ListItemButton
                            alignItems="center"
                            onClick={() => {
                                updateSelectedTab(index)
                                navigateSelectedTab(index)
                            }}
                            disableRipple={true}
                            sx={{
                            width: "100%",
                            maxHeight: "46px",
                            borderRadius: "6px",
                            mt: 1,
                            }}             
                        >
                            <Box
                                sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                color: "#B4C5D9",
                                // textDecoration: "none",
                                height: "46px",
                                width: "100%",
                                // borderRadius: "6px",
                                px: "16px",
                                py: "12px",
                                borderRadius: "6px",
                                }}
                                bgcolor={selectedTab === index ? "#2E4AAE" : "#212B36"}
                                >
                                    <img src={getItemIcon(index)} alt={tabName}/>
                                    <Typography fontSize="13px">{tabName}</Typography>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>

                <Box // profile */}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "black",
                    backgroundColor: "white",
                    justifyContent: "space-between",
                    padding: "14px",
                    borderRadius: "8px",
                    height: "48px",
                    width: "196px",
                }}>
                    <Box
                    display="flex"
                    alignItems="center"
                    gap={1}>
                        <Avatar
                        sx={{
                            width: "24px",
                            height: "24px",
                            bgcolor: "#2CA066"
                        }}>
                            <Typography fontSize="14" fontWeight={600} color='#FFFFFF'>B</Typography>
                        </Avatar>
                        <Hidden mdDown>
                            <Typography fontSize="13px">Brian O'Conor</Typography>
                        </Hidden>                    
                    </Box>    
                    <Box
                    display="flex"
                    padding={1}>         
                    <img
                        src={profileIcon}
                        alt="Brian O'Conor"
                        style={{
                            width: "10px",
                    }}/>   </Box>                
                </Box>
            </Box>
         </Box>
    );
}

export default Sidebar;