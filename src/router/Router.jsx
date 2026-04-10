import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import Books from "../pages/books/books";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/bookDetails/:bookId",
        element:<BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json")
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
