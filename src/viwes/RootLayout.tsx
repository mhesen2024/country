import { Outlet } from "react-router-dom";
import Navbar from "../component/organism/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}
