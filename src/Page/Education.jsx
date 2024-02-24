// import Image from "next/image";
import BSC from "../Component/Education/BSC";
import HSC from "../Component/Education/HSC";
import SSC from "../Component/Education/SSC";
import { Tabs } from "../components/ui/tabs";
const Education = () => {
  const tabs = [
    {
      title: "Jsc",
      value: "Jsc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Junior school certificate</p>
          <JSC />
        </div>
      ),
    },
    {
      title: "Ssc",
      value: "Ssc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Secondary school certificate</p>
          <SSC/>
        </div>
      ),
    },
    {
      title: "Hsc",
      value: "Hsc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Higer scondary school certificate</p>
          <HSC/>
        </div>
      ),
    },
    {
      title: "Bsc",
      value: "Bsc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Bachelor at Software Engineering</p>
          <BSC/>
        </div>
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
