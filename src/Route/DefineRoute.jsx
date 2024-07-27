import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Projects from "../Page/Projects";
import Soft from "../Page/Soft";
import Hard from "../Page/Hard";
import Contact from "../Page/Contact";
import Root from "../Page/Root";
import Education from "../Page/Education";
import Assigment from "../Page/Assigment";
import JDSA from "../Page/JDSA";
import LandingPage from "../Component/JDSA/Landing/LandingPage";
import Committee from "../Component/JDSA/Committee member/Committee";
import Alumni from "../Component/JDSA/Alumni/Alumni";
import FacalityOther from "../Component/JDSA/Facality&other/FacalityOther";
import Gmember from "../Component/JDSA/Gmember/Gmember";
import Profile from "../Component/JDSA/Profile/Profile";
import GameHome from "../Page/GameHome";



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
  {
    path: "/project/assignment-cover-page-genareotr",
    element: <Assigment />,
  },
  {
    path: "/project/Game/9block",
    element: <GameHome/>,
  },
  {
    path: "/project/Joypurhat-District-student-Association",
    element: <JDSA />,
    children: [
      {
        path: "/project/Joypurhat-District-student-Association",
        element: <LandingPage />,
      },
      {
        path: "/project/Joypurhat-District-student-Association/committee-members",
        element: <Committee/>,
      },
      {
        path: "/project/Joypurhat-District-student-Association/alumni",
        element: <Alumni/>,
      },
      {
        path: "/project/Joypurhat-District-student-Association/general-member",
        element: <Gmember/>,
      },
      {
        path: "/project/Joypurhat-District-student-Association/facality&other",
        element: <FacalityOther />,
      },
      {
        path: "/project/Joypurhat-District-student-Association/profile",
        element: <Profile />,
      },
    ]
  },
]);
export default router;
