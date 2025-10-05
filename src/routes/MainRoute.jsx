import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../features/home";
import { AboutUsPage } from "../features/about-us";
import { ProductPage } from "../features/product";

const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/product", element: <ProductPage /> },
]);

const MainRoute = () => {
  return <RouterProvider router={router} />;
};

export default MainRoute;
