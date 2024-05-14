import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";


const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider> 
  );
}

export default App;