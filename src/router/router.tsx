import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../viwes/RootLayout";
import Home from "../viwes/Home";
import Detailes from "../viwes/Detailes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
      {
        path: "country/:name",
        element: <Detailes/>,
      }

    ],
  },
]);

export default router;
