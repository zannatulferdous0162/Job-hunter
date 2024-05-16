import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layouts/Layout";
import Login from "../Pages/RegSin/Login";
import Register from "../Pages/RegSin/Register";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/All Jobs/AllJobs";
import MyProfileLayOut from "../Pages/MyProfile/MyProfileLayOut";
import Profile from "../Pages/MyProfile/Profile";
import AddJobs from "../Pages/Addjobs/Addjobs";
import MyList from "../Pages/MyList/MYList";
import UpdateJob from "../Pages/Update/Update";
import Detils from "../Pages/Details/Details";
import Apply from "../Pages/ApplyJob/AppltJob";
import PrivateRoute from "../Private/Private";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Detils></Detils></PrivateRoute>,
        loader:({params})=>fetch(`https://job-hunter-server-rho.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>,

      },
      {
        path:'/my-profile',
        element:<PrivateRoute><MyProfileLayOut></MyProfileLayOut></PrivateRoute>,
        children:[
          {
            path:'/my-profile/profile',
            element: <Profile></Profile>
          },
          {
            path:'/my-profile/Addjob',
            element: <AddJobs></AddJobs>
          },
          {
            path:'/my-profile/applyed',
            element: <Apply></Apply>
          },
          {
            path:'/my-profile/myjob',
            element: <MyList></MyList>
          },
          {
            path:'/my-profile/update/:id',
            element:<UpdateJob></UpdateJob>,
            loader:({params})=>fetch(`https://job-hunter-server-rho.vercel.app/jobs/${params.id}`)
            
          }
        ]
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);