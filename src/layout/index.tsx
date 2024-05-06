import { Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, makeStyles } from "@mui/material";
import { ReactNode } from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import React from "react";
import Sidebar from "../components/sidebar";


interface LayoutProps {
    children: ReactNode
}

const drawerWidth = 220


const Layout = ({ children }: LayoutProps) => {

    return (
        
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Sidebar/>
    </Drawer>
    <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
  </Box>

        // <Box
        //   sx={{
        //     backgroundColor: "#FFFFFF",
        //     display: "flex",
        //     flexDirection: {
        //       xs: "column",
        //       lg: "row",
        //     },
        //     color: "black",
        //     gap: 3,
        //     overflowY: "hidden",
        //     width: '1440px',
        //     height: "900px",
        //   }}
        // >
        //   <Sidebar />
        //   <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
        // </Box>
    );
}

export default Layout;