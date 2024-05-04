import Body from "../Component/body/Body";
import { Meteors } from "../components/ui/meteors";
import { Helmet } from "react-helmet";

const Home = () => {
  const pageURL = "https://www.linkedin.com/in/md-arif-ahammed-reza/";
  return (
    <div className="h-[calc(100vh-90px)]">
      <Helmet>
        <title>Home-Md Arif Ahammed Reza</title>
        <link rel="canonical" href={pageURL} />
        <meta
          name="description"
          content="Md Arif Ahammed Reza: Expert MERN Stack & Django Developer. Explore my diverse portfolio of innovative web solutions."
        />
      </Helmet>
      <Body />
      <Meteors number={2} />
    </div>
  );
};

export default Home;
