import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [selectedOption, setSelectedOption] = useState("buttons");
  return (
    <header className="bg-[#FAFBFD] h-full lg:w-[237px] py-5 px-3 lg:px-10 flex flex-col gap-48 shadow-md">
      <h1 className="text-[#090F31] font-poppins font-semibold text-xs md:text-base">
        <Link to="buttons">
          <span className="text-[#F7542E]">Dev</span>challenges.io
        </Link>
      </h1>
      <nav>
        <ul className="font-noto text-[#9E9E9E] text-base md:text-lg flex flex-col gap-7">
          <li
            className={
              selectedOption === "colors" ? "font-bold text-[#090F31]" : ""
            }
          >
            <Link to="/soon" onClick={() => setSelectedOption("colors")}>
              Colors
            </Link>
          </li>
          <li
            className={
              selectedOption === "typography" ? "font-bold text-[#090F31]" : ""
            }
          >
            <Link to="/soon" onClick={() => setSelectedOption("typography")}>
              Typography
            </Link>
          </li>
          <li
            className={
              selectedOption === "spaces" ? "font-bold text-[#090F31]" : ""
            }
          >
            <Link to="/soon" onClick={() => setSelectedOption("spaces")}>
              Spaces
            </Link>
          </li>
          <li
            className={
              selectedOption === "buttons" ? "font-bold text-[#090F31]" : ""
            }
          >
            <Link to="/buttons" onClick={() => setSelectedOption("buttons")}>
              Buttons
            </Link>
          </li>
          <li
            className={
              selectedOption === "inputs" ? "font-bold text-[#090F31]" : ""
            }
          >
            <Link to="/soon" onClick={() => setSelectedOption("inputs")}>
              Inputs
            </Link>
          </li>
          <li
            className={
              selectedOption === "grid" ? "font-bold text-[#090F31]" : ""
            }
          >
            <Link to="/soon" onClick={() => setSelectedOption("grid")}>
              Grid
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
