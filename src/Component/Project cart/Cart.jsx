("use client");

import { Link } from "react-router-dom";
import { PinContainer } from "../../components/ui/3d-pin";
const Cart = () => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <Link to="/project/assignment-cover-page-genareotr">
        <PinContainer title="Lets visit">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Assignment Cover page Genaretor
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 text-xs">
                The Assignment Cover Page Generator is a user-friendly project
                designed for efficient creation of professional cover pages.
                This tool simplifies the process by allowing users to input key
                information such as assignment title, author name, course
                details, and date. With an intuitive interface, users can choose
                from various templates and themes to match their academic style
                preferences.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center">
              <p className="text-center w-full">Open</p>
            </div>
          </div>
        </PinContainer>
      </Link>
    </div>
    // <div className="card-body bg-transparent w-96 shadow-primary shadow-md mt-5 mx-5">
    //     <h2 className="card-title"></h2>
    //     <p className="text-justify font-light text-xs"></p>
    //     <button className="btn btn-primary mt-2 selection:"><Link>Click for View</Link></button>
    // </div>
  );
};

export default Cart;
