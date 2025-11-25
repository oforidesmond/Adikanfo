import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";
import { Gallery } from "../components/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
    ],
  },
]);