import { Link } from "react-router-dom";
import { Btn } from "../../components/Button/Btn";

const Header = () => {
  return (
    <div className="navbar font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <a>Skills & Education</a>
              <ul className="p-2">
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/soft-skill">Soft-Skill</Link>
                </li>
                <li>
                  <Link to="/hard-skill">Programing-Skills</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-xl"
          to="/
        ">
          Reza
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <details>
              <summary>Skills & Education</summary>
              <ul className="p-2 md:w-32">
                <li>
                  <Link to="/education">Education</Link>
                </li>
                <li>
                  <Link to="/soft-skill">Soft-Skill</Link>
                </li>
                <li>
                  <Link to="/hard-skill">Programing-Skills</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Btn text={"Donwload CV"} />
      </div>
    </div>
  );
};

export default Header;
