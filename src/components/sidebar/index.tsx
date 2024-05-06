import { Box, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import homeIcon from "../../assets/icons/home-03.png";
import bookingIcon from "../../assets/icons/calendar-check-01.png";
import bookmarkIcon from "../../assets/icons/bar-chart-12.png";
import profileIcon from "../../assets/icons/Avatar.svg"
import logo from "../../assets/icons/logo.png"
import { Link } from "react-router-dom";


const navLinks = [
    {
        name: "Home",
        icon: homeIcon,
        link: "/"
    },
    {
        name: "Booking",
        icon: bookingIcon,
        link: "/booking"
    },
    {
        name: "Analytics",
        icon: bookmarkIcon,
        link: "/analytics"
    },
    {
        name: "Bookmark",
        icon: bookmarkIcon,
        link: "/bookmark"
    },
    {
        name: "Profile",
        icon: profileIcon,
        link: "/profile"
    },
];

const Sidebar = () => {
    const { pathname } = useLocation();
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
            alignItems: "center",
            justifyContent: "space-between",
            width: {
                sm: "100%",
                lg: 220,
            },
            height: 900,
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "row",
                    lg: "column",
                },
                gap: 5,
                alignItems: {
                    sx: "center",
                    ls: "start",
                },
                width: "100%",
            }}>
                <Box 
                display='flex'
                justifyContent="center" 
                alignItems="center"
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
                <Box sx={{
                    py: {
                        sx: "0px",
                        ls: "16px"
                    },
                    display: "flex",
                    flexDirection: {
                        xs: "row",
                        lg: "column"
                    },
                    gap: 4,
                    color: '#B4C5D9',
                    fontSize: '13px',
                }}
                >
                    {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;