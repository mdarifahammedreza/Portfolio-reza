
import { Helmet } from "react-helmet";
import Catrs from "../Component/Project cart/Catrs";
import { SparklesPreview } from "../components/SparklesPreview";
// import { SparklesCore } from "../components/ui/sparkles";
// import Partical from "../Component/partical/TsPartical";

const Projects = () => {
  return (
    <div>
       <Helmet>
        <title>Project-Md Arif Ahammed Reza</title>
        {/* <link rel="canonical" href={pageURL} /> */}
        <meta
          name="description"
          content="Md Arif Ahammed Reza: Expert MERN Stack & Django Developer. Explore my diverse portfolio of innovative web solutions."
        />
      </Helmet>
      <SparklesPreview />
      <Catrs/>
    </div>
  );
};

export default Projects;
