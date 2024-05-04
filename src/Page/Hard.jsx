import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// import { FaGitAlt } from "react-icons/fa6";

import LinearPrograss from "../Component/Progress/LinearPrograss";
import { TbBrandJavascript } from "react-icons/tb";
import { Helmet } from "react-helmet";

const Hard = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/Jy5vc1t/White-and-Blue-Modern-Aesthetic-Art-Poster-2.png')] bg-cover w-screen">
      <Helmet>
        <title>Programming Skill-Md Arif Ahammed Reza</title>
        {/* <link rel="canonical" href={pageURL} /> */}
        <meta
          name="description"
          content="Md Arif Ahammed Reza: Expert MERN Stack & Django Developer. Explore my diverse portfolio of innovative web solutions."
        />
      </Helmet>
      <section className="p-20 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" bg-transparent p-5 rounded-md shadow-md shadow-cyan-200 hover:bg-gray-800">
          <div className="flex items-center gap-1 card-title justify-start">
            <FaReact />
            <p>React.js</p>
          </div>
          <p className="text-xs my-2 text-justify">
            Proficient in building dynamic and responsive user interfaces using
            the React.js library. Experienced in working with components, state
            management, props, and React hooks.
          </p>

          <div className="text-end">
            <LinearPrograss value={78} />
            {/* <Radial value={75} /> */}
          </div>
        </div>
        <div className=" bg-transparent p-5 rounded-md shadow-md shadow-cyan-200 hover:bg-gray-800">
          <div className="flex items-center gap-1 card-title justify-start">
            <TbBrandJavascript />

            <p>JavaScript (ES6+)</p>
          </div>
          <p className="text-xs my-2 text-justify">
            Strong command of JavaScript, with expertise in modern ES6+
            features. Skilled in writing clean, modular, and maintainable code
            for front-end development.
          </p>

          <div className="text-end">
            <LinearPrograss value={85} />
            {/* <Radial value={75} /> */}
          </div>
        </div>
        <div className="bg-transparent p-5 rounded-md shadow-md shadow-cyan-200 hover:bg-gray-800">
          <div className="flex items-center gap-1 card-title justify-start">
            <p className="flex items-center">
              <FaHtml5 />
              HTML5 and{" "}
              <span className="mx-2">
                <FaCss3 />
              </span>{" "}
              CSS3
            </p>
          </div>
          <p className="text-xs my-2 text-justify">
            Expertise in crafting well-structured HTML5 documents and creating
            visually appealing, responsive layouts using CSS3. Familiarity with
            CSS preprocessors and frameworks.
          </p>

          <div className="text-end">
            <LinearPrograss value={90} />
            {/* <Radial value={75} /> */}
          </div>
        </div>
        <div className=" bg-transparent p-5 rounded-md shadow-md shadow-cyan-200 hover:bg-gray-800">
          <div className="flex items-center gap-1 card-title justify-start">
            <DiNodejs />
            <p>Node.js and Express.js:</p>
          </div>
          <p className="text-xs my-2 text-justify">
            Competent in server-side development using Node.js and Express.js.
            Capable of building RESTful APIs and integrating them into MERN
            stack applications.
          </p>

          <div className="text-end">
            <LinearPrograss value={70} />
            {/* <Radial value={75} /> */}
          </div>
        </div>
        <div className=" bg-transparent p-5 rounded-md shadow-md shadow-cyan-200 hover:bg-gray-800">
          <div className="flex items-center gap-1 card-title justify-start">
            <SiMongodb />
            <p>MongoDB</p>
          </div>
          <p className="text-xs my-2 text-justify">
            Proficient in MongoDB, with experience in data modeling, CRUD
            operations, and database integration within MERN stack projects.
          </p>

          <div className="text-end">
            <LinearPrograss value={78} />
            {/* <Radial value={75} /> */}
          </div>
        </div>
        <div className=" bg-transparent p-5 rounded-md shadow-md shadow-cyan-200 hover:bg-gray-800">
          <div className="flex items-center gap-1 card-title justify-start">
            <SiTailwindcss />
            <p> Tailwind CSS</p>
          </div>
          <p className="text-xs my-2 text-justify">
            Applied Tailwind CSS to streamline the styling process with
            utility-first classes. Created responsive designs and complex
            layouts using Tailwind's flexible utility classes.
          </p>

          <div className="text-end">
            <LinearPrograss value={78} />
            {/* <Radial value={75} /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hard;
