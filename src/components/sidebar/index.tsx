import { Avatar, Box, Hidden, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router";
import homeIcon from "../../assets/icons/home.svg";
import bookingIcon from "../../assets/icons/calendar-check-01.svg";
import bookmarkIcon from "../../assets/icons/bar-chart-12.svg";
import profileAvatar from "../../assets/icons/Avatar.svg"
import profileIcon from "../../assets/icons/profileIcon.svg"
import logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom";


const navLinks = [
    {
        name: "Home",
        icon: homeIcon,
        link: "/"
    },
    {
        name: "Reservation",
        icon: bookingIcon,
        link: "/booking"
    },
    {
        name: "Analytics",
        icon: bookmarkIcon,
        link: "/analytics"
    },
    {
        name: "DRS Team",
        icon: bookmarkIcon,
        link: "/team"
    },
];


const Sidebar = () => {
    const [selectedTab, updateSelectedTab] = useState("Home")


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
                width: "196px",
                height: "100%",
                justifyContent: "space-between",
                // padding: "10px",
                // backgroundColor: "gray"
            }}>
                {/* <Box    // logo
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
                </Box> */}

                <Box sx={{   // tabs
                    alignItems: "start",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    // color: '#B4C5D9',
                    fontSize: '13px',
                }}
                >
                    {navLinks.map((item) => (
                        <Link
                        key={item.name}
                        to={item.link}
                        style={{ textDecoration: "none" }}
                        onClick={() => {
                            updateSelectedTab(item.name)
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
                            width: "196px",
                            // borderRadius: "6px",
                            paddingLeft: "16px",
                            paddingTop: "12px",
                            paddingBottom: "12px",
                            paddingRight: "16px",
                            borderRadius: "6px",
                            // backgroundColor: {{selectedTab === item.name ? "#2E4AAE" : "#212B36"}},
                            }}
                            bgcolor={selectedTab === item.name ? "#2E4AAE" : "#212B36"}
                            // bgcolor= {row.status === 1 ? '#2E4AAE' : '#C7D3E1'}
                            >
                                <img
                                src={item.icon}
                                alt={item.name}
                                color="#B4C5D9"
                                style={{
                                    width: "16.5px",
                                    height: "16.5px",
                                }}/>
                                <Hidden mdDown>
                                    <Typography fontSize="13px">{item.name}</Typography>
                                </Hidden>
                            </Box>
                        </Link>
                    ))}
                </Box>

                <Box // profile
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