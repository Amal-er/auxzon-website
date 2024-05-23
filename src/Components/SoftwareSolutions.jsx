// src/Components/SoftwareSolutions.jsx
import React from "react";
import { Link } from "react-router-dom";
import analytix from "../icons/analytix.png";
import businesssolu from "../icons/bcsolu.png";
import datasolu from "../icons/datasolu.png";

function SoftwareSolutions() {
  return (
    <div className="w-full flex flex-col pt-16 items-center justify-center px-1">
      <h1 className="text-3xl font-bold">Software Solutions</h1>
      <h2 className="text-xl font-normal py-4">Custom Software Solutions:</h2>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm sm:text-base lg:text-lg md:py-3 tracking-wide">
          Our Custom Software Solutions involve the development of tailored
          software applications to address <br /> specific business needs and
          requirements. It will be built from the ground up to meet the unique{" "}
          <br />
          challenges and objectives. Beginning with a comprehensive analysis of
          the client's requirements,
          <br /> workflows, and goals, auxzon's Custom Development of Data
          Applications and Integration Services will <br /> empower businesses.
        </p>
      </div>

      <div className="w-full flex flex-col pt-2 items-center justify-center px-1">
        <h2 className="text-xl font-normal py-2">
          Website and App Development
        </h2>
        <p className="text-center text-sm sm:text-base lg:text-lg md:py-3 tracking-wide">
          : Creating digital platforms tailored to meet specific business
          objectives and user needs is crucial in this <br /> digital era.
          auxzon has special expertise, creativity, and strategic thinking in
          conceptualizing, designing, <br /> developing, testing, and deploying
          Custom or Responsive Websites and Mobile Apps (iOS and Android).
        </p>
      </div>
      {/* ---------------------------- */}

      <div className="w-full flex flex-col pt-2 items-center justify-center px-1">
        <h2 className="text-xl font-normal py-2">See more Services</h2>
      </div>

      {/* ------------------------------ */}
      <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 py-5 px-10">
        <Link to="/analytixmarketing">
          <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
            <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
              <img
                className="w-14"
                src={businesssolu}
                alt="Business Consulting Solutions"
              />
            </div>
            Analytix <br /> Marketing
          </div>
        </Link>

        <div className="flex flex-wrap justify-center py-3 gap-12">
          <Link to="/businessconsulting">
            <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
              <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
                <img
                  className="w-14"
                  src={businesssolu}
                  alt="Business Consulting Solutions"
                />
              </div>
              <p>
                Business <br /> Consulting <br /> Solutions
              </p>
            </div>
          </Link>

          <Link to="/datasolutions">
            <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
              <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
                <img className="w-14" src={datasolu} alt="Data Solutions" />
              </div>
              <p>Data Solutions</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SoftwareSolutions;
