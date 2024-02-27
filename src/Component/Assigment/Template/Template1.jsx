import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";
const Template1 = () => {
  const downloadcover = (id) => {
    const doc = new jsPDF();
    const element = document.getElementById(id);
    html2canvas(element).then((canvas) => {
      doc.addImage(canvas.toDataURL("image/JPEG"), "JPEG", 0, 0);
      doc.save("Generated.pdf");
    });
  };

  const linearlogo =
    "https://i.ibb.co/LSzfZ8M/daffodil-international-university-logo-2-B5-D310-A17-seeklogo-com.png";
  const mainlogo =
    "https://i.ibb.co/8cNLkZw/daffodil-international-university-logo-11-C0-D0-D39-A-seeklogo-com.png";
  return (
    <div>
      <div
        id="template1"
        className="m-4 border-2 relative mx-auto h-[842px] w-[595px]">
        <div>
          <div className="flex justify-center items-center border-b-4 border-lightGreen mx-4 py-4">
            {/* <img className="w-2/6" src={mainlogo} alt="" /> */}
            <img className="w-2/6" src={linearlogo} alt="" />
          </div>
          <h1 className="text-center text-4xl uppercase tracking-wider mt-4">
            Lab Report
          </h1>
          <div className="ml-4">
            <div className="my-4">
              <p className="text-lg">Report No:</p>
              <p className="text-lg">Report Title:</p>
            </div>
            <div className="my-4">
              <h1 className="uppercase  font-semibold tracking-widest mb-1">
                Table of contents
              </h1>
              <ul className="bg-lightGreen list-disc w-64 px-6 py-2 rounded-md">
                <li>Introduction-----------------</li>
                <li>Objectives-------------------</li>
                <li>Code & Output--------------</li>
                <li>Discussion--------------------</li>
              </ul>
            </div>
            <img
              className="opacity-10 absolute top-80 right-32"
              src={mainlogo}
              alt="mainlogo"
            />
            <section className="my-6">
              <h1 className="text-lg font-semibold bg-lightBlue text-white inline px-3 py-1 rounded-md">
                Submitted By:
              </h1>
              <ul>
                <li>Name:</li>
                <li>Student ID:</li>
                <li>Section:</li>
                <li>Department:</li>
              </ul>
              <p>Daffodil International University</p>
            </section>
            <section className="my-6">
              <h1 className="text-lg font-semibold bg-lightBlue text-white inline px-3 py-1 rounded-md">
                Submitted To:
              </h1>
              <ul>
                <li>Name:</li>
                <li>Student ID:</li>
                <li>Section:</li>
                <li>Department:</li>
              </ul>
              <p>Daffodil International University</p>
            </section>
            <p className="text-right mr-8 relative bottom-12">
              Submission Date:
            </p>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => downloadcover("template1")}>
        Donwload
      </button>
    </div>
  );
};

export default Template1;
