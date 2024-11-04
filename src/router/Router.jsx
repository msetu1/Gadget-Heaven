import { createBrowserRouter} from "react-router-dom";
import Route from "./Route";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllProduct from "../components/AllProduct/AllProduct";
import MoreDetails from "../components/MoreDetails/MoreDetails";
import ContactNow from "../components/ContactNow/ContactNow";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Route/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'statistics',
            element:<Statistics/>
        },
        {
            path:'dashboard',
            element:<Dashboard/>
        },
        {
            path:'all-product/:category',
            element:<AllProduct/>
        },
        {
            path:'more-details/:id',
            element:<MoreDetails/>
        },
        {
            path:'contact-now',
            element:<ContactNow/>
        },
      ]
    },
  ]);

export default router;