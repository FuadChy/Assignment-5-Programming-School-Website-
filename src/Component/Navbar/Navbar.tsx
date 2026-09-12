import logo from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white py-4">
      <div className="flex items-center container mx-auto px-4 md:justify-between">
        <div className="md:hidden absolute left-4">
          <button>
            <img src={hamburger} alt="Menu" />
          </button>
        </div>
        <div className="flex-1 flex justify-center md:flex-none">
          <img src={logo} alt="Dev Stack Logo" className="w-32" />
        </div>
        <ul className="hidden md:flex gap-6 ">
          <li>
            <a className="text-[#DB2777]" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-[#334155]" href="#">
              Technologies
            </a>
          </li>
          <li>
            <a className="text-[#334155]" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="text-[#334155]" href="#">
              About{" "}
            </a>
          </li>
          <li>
            <a className="text-[#334155]" href="#">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="text-[#334155] px-3 py-2 hover:text-[#DB2777]">
            Sign In
          </button>
          <button className="bg-[#D91B7E] rounded-full px-5 py-2 text-white hover:bg-[#BE185D]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
