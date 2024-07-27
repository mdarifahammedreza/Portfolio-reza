import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ProposeGame =()=>{
    const nextPage = () => {
        // Define the function to handle the "Yes" button click
        console.log("Yes button clicked");
      };
    
     const  moveButton = (event) => {
        toast.error("Hbe na,Yes bolo")
        // Define the function to handle the "No" button mouseover
        const button = event.target;
        button.style.position = 'absolute';
        button.style.left = `${Math.random() * (window.innerWidth - button.clientWidth)}px`;
        button.style.top = `${Math.random() * (window.innerHeight - button.clientHeight)}px`;
      };
return(
<>
<div className="h-screen w-screen flex flex-col justify-center items-center bg-black">

        <div>
          <h1 className="text-xl font-bold text-white">Hello! Kona jaman(panda)</h1>
          <p className="font-semibold text-white">i want a little bit ador</p>
          <p className="font-semibold text-white text-xs">Do you give me?</p>
          
        </div>
        <div className="gif_container">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
            alt="Cute animated illustration"
          />
        </div>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
   <div className=" flex gap-4">
          <Link to="/yes"><button className="btn bg-white hover:text-white text-black font-bold" id="yesButton" onClick={nextPage}>
            Yes
          </button></Link>
          <button
            className=" btn bg-white text-black font-bold "
            id="noButton"
            onMouseOver={moveButton}
            onClick={moveButton}
          >
            No
          </button>
        </div>
      
      </div>

</>

)

}
export default ProposeGame;