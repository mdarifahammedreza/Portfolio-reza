// import Image from "next/image";
import BSC from "../Component/Education/BSC";
import HSC from "../Component/Education/HSC";
import SSC from "../Component/Education/SSC";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Tabs } from "../components/ui/tabs";
const Education = () => {
  const tabs = [
    {
      title: "Bsc",
      value: "Bsc",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Bachelor at Software Engineering</p>
            <BSC />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Hsc",
      value: "Hsc",
      content: (
        <BackgroundGradient>
          {" "}
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Higer scondary school certificate</p>
            <HSC />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Ssc",
      value: "Ssc",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Secondary school certificate</p>
            <SSC />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Jsc",
      value: "Jsc",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Junior school certificate</p>
            <JSC />
          </div>
        </BackgroundGradient>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col  mx-auto w-full md:p-10  items-end justify-end">
      <Tabs tabs={tabs} />
    </div>
  );
};

const JSC = () => {
  return (
    <>
      <p>jsc content</p>
    </>
  );
};

export default Education;
