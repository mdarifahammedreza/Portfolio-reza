import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Marquee from "react-fast-marquee";
import { SpeedInsights } from "@vercel/speed-insights/next";
const Root = () => {
  return (
    <div>
      <div className="bg-transparent">
        <Marquee>
          <p>
            This website is still in the development stage; please consider this
            when you visit it.
          </p>
        </Marquee>
      </div>
      <SpeedInsights />
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
