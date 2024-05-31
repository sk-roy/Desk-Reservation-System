import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import './theme2.less';


const App = () => {
  return(
      <RouterProvider router={router} />
  );
}

export default App;