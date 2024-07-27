
import { useState } from "react";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";
const Header =()=>{
const [status,setStatus]=useState(false)
const logout =()=>{
  console.log("log out Success")
  setStatus(false)
}
const login =()=>{
  console.log("log in Success")
  setStatus(true)
}
return (
        <>
 <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">JDSA</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      {
        status? (<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>) :
          <button className="btn btn-ghost btn-circle avatar"><CgMoreO />
</button>
      }
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
        <li>
          {status?<Link to = "profile"className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>:null}
        </li>
        <li><Link to="committee-members">Committee Members</Link></li>
        <li><Link to="alumni">Alumni</Link></li>
        <li><Link to="general-member">General Members</Link></li>
        <li><Link to="facality&other">Facality & other</Link></li>
        <li>{
          status?<button onClick={logout}>Logout</button>:<button onClick={login}>Login</button>
        }</li>
      </ul>
    </div>
  </div>
</div>
        </>
    )

}

export default Header;