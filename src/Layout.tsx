import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
        <ScrollRestoration />
    </div>
  )
}

export default Layout
