import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from './router/router'
import { useSelector } from "react-redux";
import { selectDarkMode } from "./redux-tk/store/features/darkSlice";

export default function App() {
  const isDark = useSelector(selectDarkMode);
  return (
    <div className={`h-screen ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
      <RouterProvider router={router} />
    </div>
  );
}