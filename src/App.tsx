import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import './theme2.less';
import { ConfigProvider } from "antd";
import { theme } from "./theme";


const App = () => {
  return(    
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;