import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0052cc',
//     },
//     secondary: {
//       main: '#edf2ff',
//     },
//   },
// });


const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider> 
  );
}

export default App;