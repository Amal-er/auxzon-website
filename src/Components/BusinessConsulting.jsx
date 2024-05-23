import React from "react";
import { Link } from "react-router-dom";
import analytix from "../icons/analytix.png";
import businesssolu from "../icons/bcsolu.png";
import datasolu from "../icons/datasolu.png";

function BusinessConsulting() {
  return (
    <div className="w-full flex flex-col pt-16 items-center justify-center px-1">
      <h1 className="text-3xl font-bold">Business Consulting Solutions</h1>
      <h2 className="text-xl font-normal py-4">
        Strategic Business Consulting:
      </h2>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm sm:text-base lg:text-lg md:py-3 tracking-wide">
          We develop strategies for organizations to help them implement that
          align with their long-term goals <br /> and objectives. Our expert
          consultants work closely with businesses to assess their current
          position,
          <br /> market dynamics, and competitive landscape and then develop
          customized strategies to drive growth, <br /> profitability, and
          sustainability. Our Change Management and Innovation Management
          solutions are <br /> effective in many ways, like overcoming
          challenges, capitalizing on opportunities, and achieving <br />{" "}
          sustainable growth.
        </p>
      </div>

      <div className="w-full flex flex-col pt-2 items-center justify-center px-1">
        <h2 className="text-xl font-normal py-2">
          Risk Management and Compliance
        </h2>
        <p className="text-center text-sm sm:text-base lg:text-lg md:py-3 tracking-wide">
          Business is always risky. Confronting and successfully overcoming{" "}
          <br />
          them is the only way to grow. Here is where auxzon can help you with
          our Risk Assessment Solutions <br /> and Tools. We have exceptionally
          skilled professionals to handle Regulatory Compliance services and{" "}
          <br />
          Fraud Detection Systems. It helps predict future outcomes and develop
          strategies accordingly to reduce <br />
          risk.
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
                alt="Analytix Marketing"
              />
            </div>
            Analytix <br /> Marketing
          </div>
        </Link>

        <div className="flex flex-wrap justify-center py-3 gap-12">
          <Link to="/softwaresolutions">
            <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
              <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
                <img
                  className="w-14"
                  src={businesssolu}
                  alt="Software Solutions"
                />
              </div>
              Software <br /> Solutions
            </div>
          </Link>

          <Link to="/datasolutions">
            <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
              <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg zoom-effect">
                <img className="w-14" src={datasolu} alt="Data Solutions" />
              </div>
              Data <br /> Solutions
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BusinessConsulting;
