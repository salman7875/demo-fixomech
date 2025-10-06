import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../features/home";
import { AboutUsPage } from "../features/about-us";
import { ProductDetailPage, ProductPage } from "../features/product";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  {
    path: "/product",
    children: [
      { index: true, element: <ProductPage /> },
      { path: ":id", element: <ProductDetailPage /> },
    ],
  },
]);

const MainRoute = () => {
  return <RouterProvider router={router} />;
};

export default MainRoute;
