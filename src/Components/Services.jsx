import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup.jsx"; // Import the Popup component
import servicebg from "../assets/bgservices.png";
import analytix from "../icons/analytix.png";
import softwaresicon from "../icons/softwaresicon.png";
import businesssolu from "../icons/bcsolu.png";
import datasolu from "../icons/datasolu.png";
import health from "../icons/healthcare_2869741.png";
import finance from "../icons/financeicon.png";
import tele from "../icons/communication-network_12922964.png";
import manufacturing from "../icons/manufacturing_1814432.png";
import transportation from "../icons/transportation_995334.png";
import insurance from "../icons/life-insurance_1518636.png";
import publicsector from "../icons/team_1654195.png";
import marketing from "../icons/megaphone_4565288.png";
import education from "../icons/education_3976555.png";
import "./Popup.css"; // Import the Popup styling

const serviceDetails = {
  "Health Care":
    "Our services in healthcare involves analyzing patient data, medical records, and clinical trials to improve treatment outcomes, predict diseases, and enhance operational efficiencies. It also plays a role in genomic research and personalized medicine.",
  Finance:
    "In finance, our services can be used for risk analytics, fraud detection, customer segmentation, and credit scoring. It helps in making better investment decisions and managing financial risks more effectively.",
  Telecommunication:
    "Our expertise can assist telecom companies in network optimization, predictive maintenance, and predicting customer churn, ultimately enhancing their customer service significantly.",
  Manufacturing:
    "In manufacturing, Our services is applied in predictive maintenance, quality control, demand forecasting, and supply chain optimization to reduce costs and increase efficiency",
  Transportation:
    "Transportation services offer cutting-edge solutions to improve logistics, fleet management, and supply chain operations.",
  Insurance:
    "Insurance services provide tailored solutions for insurers to manage risk, streamline processes, and improve customer experience.",
  "Public Sector":
    "Governments and public agencies can use our services for urban planning, environmental monitoring, resource management, and policy making.",
  Marketing:
    "Marketing services offer data-driven strategies to help businesses effectively reach their target audience and drive growth.",
  Education:
    "Our service in education can help in student performance analysis, curriculum development, and personalized learning experiences.",
};

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setPopupMessage(serviceDetails[service]);
  };

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
          <div className="w-full flex flex-col pt-16 items-center justify-center px-1">
            <h1 className="text-3xl font-bold">Our Key Services</h1>
            {/* -------------------boxes----------- */}
            <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 py-5 px-10">
              {/* First row with one box */}
              <div className="w-full flex justify-center py-6">
                <Link to="/analytixmarketing">
                  <div className="box bg-white w-64 md:w-72 h-32 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative cursor-pointer">
                    <div className="absolute shadow-lg bottom-20 right-56 w-16 h-16 md:w-20 md:h-20 md:right-60 md:bottom-20 rounded-full flex justify-center items-center bg-white zoom-effect">
                      <img
                        className="w-14"
                        src={analytix}
                        alt="Analytix Marketing"
                      />
                    </div>

                    <p>
                      Analytix <br /> Marketing{" "}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Second row with three boxes */}
              <div className="w-full flex flex-wrap justify-center py-3   gap-12">
                <Link to="/softwaresolutions">
                  <div className="box  bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
                    <div className="absolute bottom-[125px] right-56 w-16 h-16 md:w-20 md:h-20 md:right-56 shadow-lg rounded-full flex justify-center items-center  bg-white  zoom-effect">
                      <img
                        className="w-14"
                        src={softwaresicon}
                        alt="Software Solutions"
                      />
                    </div>
                    <p>
                      Software <br />
                      Solutions
                    </p>
                  </div>
                </Link>

                <Link to="/businessconsulting">
                  <div className="box  bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative ">
                    <div className="absolute bottom-[125px] right-56  w-16 h-16 md:w-20 md:h-20 md:right-56 rounded-full flex justify-center items-center bg-white shadow-lg  zoom-effect">
                      <img
                        className="w-14"
                        src={businesssolu}
                        alt="Business Consulting Solutions"
                      />
                    </div>
                    <p>
                      Business <br /> Consulting <br /> Solutions{" "}
                    </p>
                  </div>
                </Link>

                <Link to="/datasolutions">
                  <div className="box bg-white w-64 md:w-72 h-40 flex px-8 shadow-lg justify-center rounded-xl flex-col items-center relative">
                    <div className="absolute bottom-[125px] right-56  w-16 h-16 md:w-20 md:h-20 md:right-56  rounded-full flex justify-center items-center bg-white shadow-lg  zoom-effect">
                      <img
                        className="w-14"
                        src={datasolu}
                        alt="Data Solutions"
                      />
                    </div>
                    <p>Data Solutions</p>
                  </div>
                </Link>
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
                    onClick={() => handleServiceClick("Health Care")}
                  >
                    <img className="w-12 sm:w-16" src={health} alt="Health" />
                  </div>

                  <p className="mt-2 text-center">Health Care</p>
                </div>
                {/* Repeat the above structure for the remaining service categories */}
                {/* Finance */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Finance")}
                  >
                    <img className="w-12 sm:w-16" src={finance} alt="Finance" />
                  </div>
                  <p className="mt-2 text-center">Finance</p>
                </div>
                {/* Telecommunication */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Telecommunication")}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={tele}
                      alt="Telecommunication"
                    />
                  </div>
                  <p className="mt-2 text-center">Telecommunication</p>
                </div>
                {/* Manufacturing */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Manufacturing")}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={manufacturing}
                      alt="Manufacturing"
                    />
                  </div>
                  <p className="mt-2 text-center">Manufacturing</p>
                </div>
                {/* Transportation */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Transportation")}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={transportation}
                      alt="Transportation"
                    />
                  </div>
                  <p className="mt-2 text-center">Transportation</p>
                </div>
                {/* Insurance */}
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Insurance")}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={insurance}
                      alt="Insurance"
                    />
                  </div>
                  <p className="mt-2 text-center">Insurance</p>
                </div>
                {/* Public Sector */}
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Public Sector")}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={publicsector}
                      alt="Public Sector"
                    />
                  </div>
                  <p className="mt-2 text-center">Public Sector</p>
                </div>
                {/* Marketing */}
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Marketing")}
                  >
                    <img
                      className="w-12 sm:w-16"
                      src={marketing}
                      alt="Marketing"
                    />
                  </div>
                  <p className="mt-2 text-center">Marketing</p>
                </div>
                {/* Education */}
                <div className="flex flex-col items-center md:pl-64">
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex justify-center items-center shadow-lg"
                    style={{
                      filter:
                        "drop-shadow(2px 6px 12px rgba(92, 66, 154, 0.7))",
                    }}
                    onClick={() => handleServiceClick("Education")}
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
          </div>
        </div>
      </div>
      {/* Render Popup component if a service is selected */}
      {selectedService && (
        <Popup
          service={selectedService}
          message={popupMessage}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

export default Services;
