const Body = () => {
  const paragraph =
    ".As a Software Engineering student at Daffodil International University, I'm passionate about exploring the vast realm of technology. Embracing diverse programming languages and methodologies, I'm eager to create innovative solutions. Continuous learning and problem-solving drive me to make a positive impact on the world through software.";

  return (
    <div className="bg-cover h-[calc(100vh-68px)] flex-col items-center p-5 font-mon bg-[url('https://i.ibb.co/Bw7qLhB/COVER.png')] bg-right ">
      <div className=" bg-black bg-opacity-30 lg:w-2/4 p-10 justify-center b-2">
        <h3 className=" items-center text-2xl pt-8 lg:text-5xl  lg:pt-40  pb-4 font-medium  lg:text-center">
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

        {/* <div  className=" justify-center pt-10"><!-- Open the modal using ID.showModal() method -->
                    <button  className="btn btn-outline btn-info " onclick="my_modal_5.showModal()">Explore more</button>
                    <dialog id="my_modal_5"  className="modal modal-bottom sm:modal-middle">
                        <form method="dialog"  className="modal-box">
                            <h3  className="font-bold text-lg">Not avaible yet</h3>
                            <p  className="py-4">Press ESC key or click the button below to close</p>
                            <div  className="modal-action">
                                <!-- if there is a button in form, it will close the modal -->
                                <button  className="btn">Close</button>
                            </div>
                        </form>
                    </dialog>
                </div> */}
      </div>
    </div>
  );
};

export default Body;
