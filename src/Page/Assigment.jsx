import { useState } from "react";
import ReadInfo4Assigment from "../Component/Assigment/ReadInfo4Assigment";
import Template1 from "../Component/Assigment/Template/Template1";
import Template2 from "../Component/Assigment/Template/Template2";

const Assigment = () => {
  const [student,setstudent]=useState([]);
  return (
    <div>
      <ReadInfo4Assigment setstudent={setstudent}/>
      <Template1 />
      <Template2 student={student}/>

    </div>
  );
};

export default Assigment;
