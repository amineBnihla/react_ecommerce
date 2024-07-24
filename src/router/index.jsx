import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";
import Category from "../pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/cart",
    element : <Cart/>
  },
  {
    path:"/product/:id",
    element : <ProductPage/>
  },
  {
    path:"/category/:category",
    element : <Category/>
  }
]);


export default router