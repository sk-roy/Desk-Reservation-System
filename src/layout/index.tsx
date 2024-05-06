import { Box } from "@mui/material";
import { ReactNode } from "react";

import React from "react";
import Sidebar from "../components/sidebar";


interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            color: "black",
            gap: 3,
            overflowY: "hidden",
            width: '1440px',
            height: "900px",
          }}
        >
          <Sidebar />
          <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
        </Box>
    );
}

export default Layout;