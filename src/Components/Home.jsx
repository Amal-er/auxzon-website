import React from "react";
// import globe from "../assets/globe.png";
import banner from "../assets/banner.png";
import background2 from "../assets/background2.png";
import assess from "../icons/Assess.png";
import "../Components/style.css"; // Import your CSS file where you define transition effects
import { Link } from "react-router-dom";
import custom from "../assets/custom.png";
function Home() {
  return (
    <>
      <div className="font-novembm">
        <div
          className="total"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row w-full justify-center items-center">
              {/* Text content */}
              <div className="p-4 md:p-8 md:w-1/2 flex justify-center items-center">
                <div className="flex flex-col text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl lg:text-xl xl:text-4xl font-medium">
                    auxzon
                  </h1>
                  <div className="box mt-2 md:mt-4 rounded-md">
                    <p className="extra-relaxed text-sm md:text-base lg:text-lg xl:text-base">
                      Unveiling the power of your data. Empower yourself <br />
                      with auxzon and transform your data into a strategic{" "}
                      <br />
                      asset for sustainable growth and innovation
                    </p>
                    <Link to="/about">
                      <button className="readmore-button bg-custom-purple text-white hover:text-black hover:bg-white rounded-md border-2 border-custom-purple mt-3">
                        Readmore
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Globe image */}
              <div className="p-8 md:p-8 md:w-1/2 flex justify-center items-center">
                <img
                  src={custom}
                  alt="custom"
                  className="w-96 md:w-112 lg:w-128 xl:w-144 h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* mastering */}
        <div
          className="total2"
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <div className="flex flex-col justify-center items-start py-6">
            <div className="py-4  pl-4 md:pl-60">
              <h1 className="text-2xl md:text-xl lg:text-2xl xl:text-4xl font-normal">
                Mastering Business with Data
              </h1>
            </div>
            <div className="px-4 md:px-60">
              <div className="box   border-gray-300 rounded-md">
                <p className="text-sm leading-relaxed md:text-base md:leading-normal text-customPara lg:text-base xl:text-base">
                  Data is the lifeblood of modern civilization. The world is
                  interconnected, and data fuels advancements in artificial
                  intelligence, machine learning, and predictive analytics.
                  Those who explore the unending possibilities of data will
                  thrive in their business. From healthcare to finance,
                  education to marketing, data shapes business policies,
                  products, and services. It enhances efficiency, identifies
                  opportunities, and mitigates risks. auxzon believes that data
                  isn't just information; it's the cornerstone of progress,
                  fostering growth, and driving change in our dynamic global
                  landscape. Our supportive advice will open doors to unexplored
                  areas of data analysis, through which any business can find
                  effective solutions to their business problems and improve
                  their operational efficiency to the next level by making
                  evidence-based choices.
                </p>
              </div>
              <Link to="/analytixmarketing">
                <button className="bg-custom-purple text-white hover:text-black hover:bg-white rounded-md border-2 border-custom-purple mt-3 px-4 py-2">
                  Everything About Analytix Marketing
                </button>
              </Link>
            </div>
          </div>
          {/* video */}
          {/* ----------------------------- */}
          {/* <div className="w-full h-72  p-14 ">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/7fykED87Z8I"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="YouTube Video"
            ></iframe>
          </div> */}
          {/* ---------------------------- */}
          {/* hexagonal */}
          {/* <div>
            <div className="flex justify-center items-center">
              <div className="container1">
                <div
                  className="hex pos0"
                  style={{ backgroundImage: "url('icons/Assess.png')" }}
                >
                  1
                </div>
                <div
                  className="hex pos1"
                  style={{ backgroundImage: "url('path/to/icon2.png')" }}
                >
                  2
                </div>
                <div
                  className="hex pos2"
                  style={{ backgroundImage: "url('path/to/icon3.png')" }}
                >
                  3
                </div>

                <div
                  className="hex pos4"
                  style={{ backgroundImage: "url('path/to/icon4.png')" }}
                >
                  <h1 className="text-2xl text-lime-400">amalsm</h1>
                </div>
                <div
                  className="hex pos5"
                  style={{ backgroundImage: "url('path/to/icon5.png')" }}
                >
                  5
                </div>
                <div
                  className="hex pos6"
                  style={{ backgroundImage: "url('path/to/icon6.png')" }}
                >
                  6
                </div>
              </div>
            </div>
          </div> */}
          {/* ------------------------------------------ */}
        </div>
      </div>
    </>
  );
}

export default Home;
