import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white py-4">
      <div className="flex justify-between items-center container mx-auto px-4">
        <img src={logo} alt="Dev Stack Logo" />

        <ul className="flex gap-3">
          <li>
            <a className="text-[#DB2777]" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="text-[#334155]">
  Sign In
</button>
          <button className="bg-[#D91B7E] rounded-full px-5 py-2 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
