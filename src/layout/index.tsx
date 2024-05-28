import { ReactNode } from "react";
import React from "react";
import Sidebar from "../components/sidebar";


interface LayoutProps {
    children: ReactNode
}

const drawerWidth = 220


const Layout = ({ children }: LayoutProps) => {

    return (
        
    <div style={{ display: 'flex' }}>
    {/* <CssBaseline /> */}
    <div
      style={{
        width: drawerWidth,
        flexShrink: 0,
        
        // '& .MuiDrawer-paper': {
        //   width: drawerWidth,
        //   boxSizing: 'border-box',
        // },
      }}
      // variant="permanent"
      >
      <Sidebar/>
    </div>
    
    <div style={{ width: "100%", overflowY: "hidden" }}>{children}</div>
  </div>
  );
}

export default Layout;