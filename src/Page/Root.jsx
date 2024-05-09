import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Marquee from "react-fast-marquee";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Root = () => {
  console.log("Root");
  return (
    <div>
      <Analytics />
      <SpeedInsights />
      <div className="bg-transparent">
        <Marquee>
          <p>
            This website is still in the development stage; please consider this
            when you visit it.
          </p>
        </Marquee>
      </div>

      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
