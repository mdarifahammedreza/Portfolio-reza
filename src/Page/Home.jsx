import Body from "../Component/body/Body";
import { Meteors } from "../components/ui/meteors";

const Home = () => {
  return (
    <div className="h-[calc(100vh-90px)]">
      <Body />
      <Meteors number={2} />
    </div>
  );
};

export default Home;
