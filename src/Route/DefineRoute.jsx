import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Projects from "../Page/Projects";
import Soft from "../Page/Soft";
import Hard from "../Page/Hard";
import Contact from "../Page/Contact";
import Root from "../Page/Root";
import Education from "../Page/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/soft-skill",
        element: <Soft />,
      },
      {
        path: "/hard-skill",
        element: <Hard />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
