import React from "react";
import servicebg from "../assets/bgservices.png";
import analytix from "../icons/analytix.png";
import softwaresicon from "../icons/softwaresicon.png";
import businesssolu from "../icons/bcsolu.png";
import datasolu from "../icons/datasolu.png";
// -----------
import health from "../icons/healthcare_2869741.png";
import finance from "../icons/financeicon.png";
import tele from "../icons/communication-network_12922964.png";
import manufacturing from "../icons/manufacturing_1814432.png";
import transportation from "../icons/transportation_995334.png";
import insurance from "../icons/life-insurance_1518636.png";

import publicsector from "../icons/team_1654195.png";
import marketing from "../icons/megaphone_4565288.png";
import education from "../icons/education_3976555.png";

function Services() {
  return (
    <div>
      <div className="">
        <div
          className="total"
          style={{
            backgroundImage: `url(${servicebg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full  flex flex-col pt-16 items-center justify-center px-1">
            <h1 className="text-3xl font-bold">Our Key Services</h1>
            {/* -------------------boxes----------- */}
            <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 py-5 px-10">
              {/* First row with one box */}
              <div className="w-full flex justify-center py-6">
                <div className="box bg-white w-64 md:w-72 h-32 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
                  <div className="absolute shadow-lg bottom-20 right-56 w-16 h-16 md:w-20 md:h-20 md:right-60 md:bottom-20 rounded-full flex justify-center items-center bg-white zoom-effect">
                    <img className="w-14" src={analytix} alt="" />
                  </div>

                  <p>
                    Analytix <br /> Marketing{" "}
                  </p>
                </div>
              </div>

              {/* Second row with three boxes */}
              <div className="w-full flex flex-wrap justify-center py-3   gap-12">
                <div className="box  bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
                  <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 shadow-lg rounded-full flex justify-center items-center  bg-white  zoom-effect">
                    <img className="w-14" src={softwaresicon} alt="" />
                  </div>
                  <p>
                    Software <br />
                    Solutions
                  </p>
                </div>

                <div className="box  bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative ">
                  <div className="absolute bottom-[125px] right-56  w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg  zoom-effect">
                    <img className="w-14" src={businesssolu} alt="" />
                  </div>
                  <p>
                    Business <br /> Consulting <br /> Solutions{" "}
                  </p>
                </div>

                <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
                  <div className="absolute bottom-[125px] right-56  w-16 h-16 md:w-20 md:h-20 md:right-56  rounded-full flex justify-center items-center bg-white shadow-lg  zoom-effect">
                    <img className="w-14" src={datasolu} alt="" />
                  </div>
                  <p>Data Solutions</p>
                </div>
              </div>
            </div>

            {/* --------------- */}
            <div className="w-full h-32 flex justify-center items-center">
              <h1 className="text-3xl font-medium text-center md:text-left">
                <span className="block md:inline">Our Services Apply </span>
                <span className="block md:inline">to These Areas</span>
              </h1>
            </div>

            {/* ----------------------- */}
            <div className="flex justify-center items-center md:py-10 ">
              <div className="grid grid-cols-3 sm:grid-cols-5 ">
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img className="w-12 sm:w-16" src={health} alt="Health" />
                  </div>

                  <p className="mt-2 text-center">Health Care</p>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img className="w-12 sm:w-16" src={finance} alt="Finance" />
                  </div>
                  <p className="mt-2 text-center">Finance</p>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={tele}
                      alt="Telecommunication"
                    />
                  </div>
                  <p className="mt-2 text-center">Telecommunication</p>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={manufacturing}
                      alt="Manufacturing"
                    />
                  </div>
                  <p className="mt-2 text-center">Manufacturing</p>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={transportation}
                      alt="Transportation"
                    />
                  </div>
                  <p className="mt-2 text-center">Transportation</p>
                </div>
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={insurance}
                      alt="Insurance"
                    />
                  </div>
                  <p className="mt-2 text-center">Insurance</p>
                </div>
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={publicsector}
                      alt="Public Sector"
                    />
                  </div>
                  <p className="mt-2 text-center">Public Sector</p>
                </div>
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={marketing}
                      alt="Marketing"
                    />
                  </div>
                  <p className="mt-2 text-center">Marketing</p>
                </div>
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={education}
                      alt="Education"
                    />
                  </div>
                  <p className="mt-2 text-center">Education</p>
                </div>
              </div>
            </div>

            {/* ------------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
