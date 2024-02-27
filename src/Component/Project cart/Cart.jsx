("use client");

import { Link } from "react-router-dom";
import { PinContainer } from "../../components/ui/3d-pin";
const Cart = ({ item }) => {
  console.log(item);
  return (
    <div className="h-[25rem] flex items-center justify-center">
      <Link to={item.url}>
        <PinContainer title="Lets visit">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {item.Cardtitle}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 text-xs">
                {item.CardDescription}
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 items-center">
              <p className="text-center w-full">Open</p>
            </div>
          </div>
        </PinContainer>
      </Link>
    </div>
  );
};

export default Cart;
