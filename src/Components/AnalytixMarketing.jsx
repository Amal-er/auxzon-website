// src/Components/AnalytixMarketing.jsx
import React from "react";
import { Link } from "react-router-dom";
import analytix from "../icons/analytix.png";
import businesssolu from "../icons/bcsolu.png";
import datasolu from "../icons/datasolu.png";
import servicebg from "../assets/bgservices.png";

function AnalytixMarketing() {
  return (
    <>
      <div
        className="total"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex flex-col pt-16 items-center justify-center px-1">
          <h1 className="text-3xl font-bold">Analytix Marketing</h1>
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-7 tracking-wide">
              We can understand the consumers better than ever before with
              Analytix Marketing. It is a methodology <br />
              of collecting user information like the purchases they make, the
              social media profiles they visit, the articles <br /> they read,
              the sites they spend more time on, etc. From these collected data,
              we can get a clear picture of <br /> the hidden patterns about
              their behaviors. It actually reveals the deepest desires and needs
              of our <br />
              target audience. Since every action leaves a digital footprint,
              Analytix Marketing helps predict the next big trend before it{" "}
              <br /> even emerges. It transforms raw data into actionable
              insights, and the most powerful aspect of it is the <br />
              ability to personalize the customer experience. auxzon will let
              you create highly targeted campaigns that <br /> resonate with
              individual customers on a deeply personal level. auxzon also gets
              the assistance of <br /> advanced analytics techniques such as
              machine learning and artificial intelligence to extract meaningful{" "}
              <br /> patterns from the noise.
            </p>
          </div>

          <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 py-5 px-10">
            <Link to="/softwaresolutions">
              <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative cursor-pointer">
                <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
                  <img
                    className="w-14"
                    src={analytix}
                    alt="Analytix Marketing"
                  />
                </div>
                Software <br />
                Solutions
              </div>
            </Link>

            <div className="flex flex-wrap justify-center py-3 gap-12">
              <Link to="/businessconsulting">
                <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative cursor-pointer">
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
                <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative cursor-pointer">
                  <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
                    <img className="w-14" src={datasolu} alt="Data Solutions" />
                  </div>
                  <p>Data Solutions</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalytixMarketing;
