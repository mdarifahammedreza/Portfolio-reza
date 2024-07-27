import { Outlet } from "react-router-dom";
import Header from "../Component/JDSA/Header/Header";
import Frame from "../Component/JDSA/Photo/Frame";


const JDSA = () => {
 
  return (
    <div>
       <Header />
       <Frame/>
       <Outlet/>
    </div>
  );
};
export default JDSA;
