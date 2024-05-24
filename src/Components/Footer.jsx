// import React from "react";

import React from "react";
import auxzon from "../images/aUXZON.png";
import company from "../images/company.png";
import fb from "../icons/fb.png";
import insta from "../icons/inst.png";
import linkedin from "../icons/linkedin.png";
import youtube from "../icons/youtube.png";
import footerbg from "../assets/footerbg.png";

function Footer() {
  return (
    <footer className="bg-customBlue text-white py-8 px-5">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-4 sm:mb-0 flex flex-col items-center">
          <img className="w-24 " src={company} alt="" />
          <ul className="flex flex-wrap mt-3">
            <li className="mr-4 mb-2">
              <a href="#" className="hover:text-gray-400">
                <img className="w-10 h-10" src={fb} alt="" />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#" className="hover:text-gray-400">
                <img className="w-10 h-10" src={insta} alt="" />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#" className="hover:text-gray-400">
                <img className="w-10 h-10" src={linkedin} alt="" />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="#" className="hover:text-gray-400">
                <img className="w-10 h-10" src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h2 className="text-lg text-black font-medium mb-2">Contact</h2>
          <ul className="flex flex-col">
            <li className="mr-4 mb-2 text-black text-sm">
              <p>addresss</p>
              <p>
                Asset Corridor, Ponekkara, <br /> Edappally, Kochi, Ernakulam,
                Kerala 682024
              </p>
              <p>Email: Contact@auxzon.com</p>
              <p>Phone: +91 9072168666</p>
              {/* <p>Fax: +1-555-987-6543</p> */}
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h2 className="text-lg font-medium text-black mb-2">Quick links</h2>
          <ul className="flex flex-wrap col-start-2">
            <div className="w-1/2">
              <li className="mr-4">
                <a href="/" className=" text-black text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="about"
                  className=" text-black text-sm hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="services"
                  className=" text-black text-sm hover:text-gray-400"
                >
                  Our Services
                </a>
              </li>
            </div>
            <div className="w-1/2 px-4">
              <li className="mr-4">
                <a
                  href="hexa"
                  className=" text-black text-sm hover:text-gray-400"
                >
                  auxzonHexa
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="careers"
                  className=" text-black text-sm hover:text-gray-400"
                >
                  Carrers
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="/contact"
                  className=" text-black text-sm hover:text-gray-400"
                >
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </div>
        {/* ----------- */}

        <div
          className=""
          style={{
            backgroundImage: `url(${footerbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="pt-10  w-full flex justify-center  ">
            <div className=" ">
              <img className="" src={auxzon} alt="Auxzon Logo" />
            </div>
          </div>
        </div>
        {/* ------------ */}
      </div>
    </footer>
  );
}

export default Footer;
