import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import Books from "../pages/books/books";
import ErrorPage from "../ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
  
  {
    path:'/',
    element: <MainLayout/>,
    children:[

      {
        index:true,
        element:<HomePage></HomePage>,
      },
      {
        path:'/books',
        element: <Books></Books>
      },
    ],
      errorElement:<ErrorPage></ErrorPage>
  },
  
])
