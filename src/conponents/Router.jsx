import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Wrapper from "./Wrapper";
import Landing from "./Landing";
import About from "./About";
import STPProducts from "./Stp";
import EtpProducts from "./Etp";
import CompostManagement from "./Compost";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Wrapper,
    children: [
      { index: true, Component: Landing },
      { path: "about", Component: About },
      { path: "stp", Component: STPProducts },
      { path: "etp", Component: EtpProducts },
      { path: "compost", Component: CompostManagement },
      
    ],
  },
]);


export default function RouterFun() {
  return (
    <RouterProvider router={router} />
  );
}