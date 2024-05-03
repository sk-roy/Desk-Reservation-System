import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import { createTheme } from "@mui/material";


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
  return <RouterProvider router={router} />;
}

export default App;