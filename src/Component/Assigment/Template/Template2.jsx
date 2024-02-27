import Table from "react-bootstrap/Table";
const Template2 = () => {
  const linearlogo =
    "https://i.ibb.co/LSzfZ8M/daffodil-international-university-logo-2-B5-D310-A17-seeklogo-com.png";
  const mainlogo =
    "https://i.ibb.co/8cNLkZw/daffodil-international-university-logo-11-C0-D0-D39-A-seeklogo-com.png";
  return (
    <div className="bg-white text-black h-[842px] w-[595px] p-10">
      <div className="w-full  flex items-center justify-center">
        <img src={linearlogo} alt="" />
      </div>
      <div>
        <h3 className="font-bold text-center p-3 text-3xl text-black">
          Theory Assignment Report
        </h3>
      </div>
      <div className="text-sm font-bold">
        <table className="border-collapse border border-slate-500 p-1">
          <thead>
            <tr>
              <th colSpan="7" className="border border-slate-600 p-1">
                Only for course Teacher
              </th>
            </tr>
            <tr>
              <th colSpan="2" className="border border-slate-600 p-1"></th>
              <th className="border border-slate-600 p-1">Needs Improvement</th>
              <th className="border border-slate-600 p-1">Developing </th>
              <th className="border border-slate-600  p-1">Sufficient </th>
              <th className="border border-slate-600 p-1 ">Above Average</th>
              <th className="border border-slate-600  p-1">Total Mark </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" className="border p-1 border-slate-700 ...">
                Allocate mark & Percentage
              </td>
              <td className="border border-slate-700 text-center">25%</td>
              <td className="border border-slate-700 text-center">50%</td>
              <td className="border border-slate-700 text-center">75%</td>
              <td className="border border-slate-700 text-center">100%</td>
              <td className="border border-slate-700 text-center">5</td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Clarity</td>
              <td className="border border-slate-700 text-center">1</td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">Content Quality </td>
              <td className="border border-slate-700 text-center">2</td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">
                Spelling & Grammar
              </td>
              <td className="border border-slate-700 text-center">1</td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
            </tr>
            <tr>
              <td className="border border-slate-700 p-1">
                Organization and Formatting{" "}
              </td>
              <td className="border border-slate-700 text-center">1</td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
              <td className="border border-slate-700 text-center"></td>
            </tr>
            <tr>
              <td colSpan="6" className="border border-slate-700 text-end p-1">
                Total obtained mark{" "}
              </td>
              <td className="border border-slate-700 text-center"></td>
            </tr>
            <tr>
              <td className="border border-slate-700 text-end p-1">Comments</td>
              <td
                colSpan="6"
                className="border border-slate-700 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="font-semibold mt-2">
        <p>Semester:</p>
        <p>Student Name: </p>
        <p>Student ID:</p>
        <div className="grid grid-cols-2">
          <p >Batch: </p> <p>Section:</p>
        </div>
        <div className="grid grid-cols-2">
          <p>Course Code: </p> <p>Course Name: </p>
        </div>
        <p>Course Teacher Name: </p>
        <p>Designation: </p>
        <p>Submission Date:</p>
      </div>
    </div>
  );
};

export default Template2;
