import { SparklesCore } from "../../components/ui/sparkles";

const Body = () => {
  const paragraph =
    ".As a Software Engineering student at Daffodil International University, I'm passionate about exploring the vast realm of technology. Embracing diverse programming languages and methodologies, I'm eager to create innovative solutions. Continuous learning and problem-solving drive me to make a positive impact on the world through software.";

  return (
    <div className="bg-cover h-[calc(100vh-68px)] flex-col items-center justify-center p-5 font-mon  bg-[url('https://i.ibb.co/Bw7qLhB/COVER.png')] bg-right ">
      <div className=" bg-black bg-opacity-50 h-full lg:w-[50rem] flex-row  p-10 justify-center items-center b-2 overflow-hidden">
        <h3 className=" items-center text-2xl  lg:text-5xl    pb-4 font-medium  lg:text-center">
          <span className="text-teal-400 font-extrabold">Hello</span>
          World!
        </h3>

        <div className="divider"></div>
        <p className="  font-sans text-left lg:text-justify justify-center">
          This is <span className="text-teal-400 ">Reza</span>
          {paragraph}
        </p>
        <p className="font-sans text-left lg:text-justify  justify-center pt-8">
          Determined to excel, I embrace challenges and collaborate to develop
          scalable and efficient software solutions.
        </p>
        {/* <!-- Open the modal using ID.showModal() method --> */}
        <div className="divider"></div>
        <SparklesCore
          className="h-full"
          background="transparent"
          minSize={0.1}
          maxSize={2}
          particleDensity={300}
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Body;
