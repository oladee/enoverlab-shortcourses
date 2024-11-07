import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Coursedetail from './pages/Coursedetail';
import Authentication from './pages/Authentication';
import { CourseDetailProvider } from "./context/CourseDetailContext"
import CourseEnrolled from './pages/CourseEnrolled';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/coursedetail/:id",
        element : <CourseDetailProvider><Coursedetail/></CourseDetailProvider>
      },
      {
        path: "/auth/:authroute",
        element : <Authentication/>
      },
      {
        path: "/enrolledcourse/:id",
        element : <CourseDetailProvider><CourseEnrolled/></CourseDetailProvider>
      },

    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
