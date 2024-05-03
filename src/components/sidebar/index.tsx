import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import bookingIcon from "../../assets/icons/icon-nav-movies.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";
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
        icon: bookmarkIcon,
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
                <Hidden smDown>
                    <Typography variant="h5" 
                    component="h1"
                    my={2}
                    color="white"
                    fontWeight={400}
                    fontSize={18}>
                        Rent-A-Car
                    </Typography>
                </Hidden>
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