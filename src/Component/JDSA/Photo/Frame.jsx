"use client";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import { Meteors } from "../../../components/ui/meteors";
const Frame = () => {
  return (
    <div className="max-w-xs">
      <BackgroundGradient>
        <div>
          <div className="relative ">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 p-2 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="flex flex-col items-center justify-center">
                <div className=" w-32 rounded">
                  <img className="rounded-lg" src="https://i.ibb.co/xz9TjBX/Eshu.jpg"/>
                </div>
                <div className="card-body">
                  <div>
                    <h2 className="font-bold">
                      Name:{" "}
                      <span className="font-semibold">
                        Eshita Ahammed Barno
                      </span>
                    </h2>

                    <h2 className="font-bold">
                      Designation:{" "}
                      <span className="font-semibold">President</span>
                    </h2>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-xs">More</button>
                  </div>
                </div>
              </div>

              <Meteors number={20} />
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Frame;
