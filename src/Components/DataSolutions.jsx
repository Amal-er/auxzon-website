import React from "react";
import { Link } from "react-router-dom";
import analytix from "../icons/analytix.png";
import businesssolu from "../icons/bcsolu.png";
import datasolu from "../icons/datasolu.png";
import servicebg from "../assets/bgservices.png";

function DataSolutions() {
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
          <h1 className="text-3xl font-bold">Data Solutions</h1>
          <h2 className="text-xl font-normal py-4">
            Data Analytics and Insights Services
          </h2>
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-3 tracking-wide">
              We collect, organize, clean, and process data to identify
              patterns, trends, and correlations to get business <br /> insights
              that will let you forecast future outcomes. We extend these
              services into Advanced Data <br /> Analytics, Business
              Intelligence (BI) Solutions, and Predictive Analytics. At the same
              time, AI, machine <br /> learning, Natural Language Processing
              (NLP), and computer vision can enhance the capabilities of data-
              <br /> related processes and services too. It enables the
              automation of tasks and the optimization of decision-
              <br /> making processes.
            </p>
          </div>

          <div className="w-full flex flex-col pt-2 items-center justify-center px-1">
            <h2 className="text-xl font-normal py-2">
              Data Visualization Services:
            </h2>
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-3 tracking-wide">
              Creating visual representations of data into intuitive charts,
              graphs, maps, and dashboards will make <br /> complex information
              more understandable and accessible. It can enable better
              decision-making and
              <br /> communication by quickly identifying trends, patterns, and
              outliers. We leverage the best practices,
              <br /> principles of design, and storytelling methods to
              effectively convey insights and support data-driven
              <br /> narratives with our Interactive Dashboards, Infographics
              and Reporting, and Real-time Data <br /> Visualization services.
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
                    src={analytix}
                    alt="Analytix Marketing"
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
                  Business <br /> Consulting <br /> Solutions
                </div>
              </Link>

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataSolutions;
