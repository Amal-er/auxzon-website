import React from "react";
import aboutbg from "../assets/aboutbg.png";
import taylor from "../icons/tailored.png";
import expertise from "../icons/expertise.png";
import datas from "../icons/datas.png";
import stay from "../icons/stay.png";
import customer from "../icons/customer.png";

function About() {
  return (
    <div className="">
      <div
        className="total"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full  flex flex-col pt-16 items-center justify-center px-1">
          <h1 className="text-3xl font-bold">About Us</h1>
          <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-7 tracking-wide">
              Are you ready to elevate your business to new heights? Look no
              further than auxzon <br className="hidden sm:inline" /> Solutions
              for data-driven business insights tailored to your specific needs.
              auxzon can be <br className="hidden sm:inline" />
              your trusted partner to provide trends and strategies to help your
              business thrive in today's <br className="hidden sm:inline" />{" "}
              dynamic digital landscape.
            </p>
          </div>

          {/* --------------- */}

          <div className="w-full h-600px  mt-6 flex flex-col md:flex-row gap-40 justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center w-[330px] h-[400px]  p-4 rounded-lg shadow-lg bg-white">
              <h1 className="text-xl font-bold mb-2"> Our Mission</h1>
              <p>
                We envision a future where businesses <br /> transcend
                boundaries through the <br /> strategic use of data. Our vision
                is to be <br /> the driving force behind a data-powered
                <br />
                revolution, empowering organizations <br /> worldwide with
                transformative analytics <br /> and consulting services powered
                with innovative tools including AI and ML. We
                <br /> see a landscape where data is not just a <br /> resource
                but a catalyst for innovation,
                <br /> efficiency, and sustained growth.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-auto h-[400px]  p-4 rounded-lg shadow-lg bg-white">
              <h1 className="text-xl font-bold mb-2"> Our Vision</h1>
              <p>
                At Auxzon Solutions, we believe in a <br />
                client-centric approach and dream of a <br />
                future where our services become <br />
                integral to the decision-making of
                <br /> businesses. Join us as we shape a future
                <br /> where intelligence and innovation
                <br /> converge, powered by data. Together,
                <br /> let's embark on a journey toward a<br />
                business landscape where insights drive <br />
                growth and define new possibilities
                <br /> and horizons.
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------ */}

        <div className="w-full h-32  flex justify-center items-center">
          <h1 className="text-4xl font-medium">Why Choose auxzon?</h1>
        </div>
        {/* ----------------------------------- */}

        <div className="w-full h-auto  flex flex-wrap justify-center items-center gap-10 py-10 px-10">
          <div className="box w-full md:w-96 h-56 bg-white  flex px-8 shadow-lg justify-center rounded-xl flex-col items-start relative zoom-effect">
            <div className="absolute bottom-[200px] left-[295px] w-16 h-16 md:w-20 md:h-20   border-2 border-custom-purple  rounded-full  flex justify-center items-center ">
              <img className="w-14" src={taylor} alt="" />
            </div>
            <p>Tailored Solutions</p>
            <span className="text-sm font-light">
              We understand that every business <br /> is unique. That's why we
              tailor our <br /> solutions to fit your specific goals
              <br /> and challenges.
            </span>
          </div>
          <div className="box w-full bg-white md:w-96 h-56  flex px-8  shadow-2xl justify-center rounded-xl flex-col items-start relative zoom-effect">
            <div className="absolute  bottom-[200px] left-[295px] w-16 h-16 border-2  md:w-20 md:h-20  rounded-full flex justify-center items-center  border-custom-purple ">
              <img className="w-14" src={expertise} alt="" />
            </div>
            <p>Expertise</p>
            <span className="text-sm font-light">
              Our team comprises seasoned <br />
              professionals with diverse expertise <br /> across industries. You
              can trust us to <br /> deliver precise results backed by <br />
              data analysis.
            </span>
          </div>
          <div className="box w-full bg-white md:w-96 h-56  flex px-8 shadow-lg justify-center rounded-xl flex-col items-start relative zoom-effect">
            <div className="absolute bottom-[200px] left-[295px] w-16 h-16 border-2  md:w-20 md:h-20 rounded-full flex justify-center items-center  border-custom-purple ">
              <img className="w-14" src={customer} alt="" />
            </div>
            <p>Customer-Centric Approach</p>
            <span className="text-sm font-light">
              Your success is our priority. We work <br /> closely with you
              every step of the way,
              <br /> ensuring that our solutions align with <br /> your vision
              and objectives.
            </span>
          </div>
          {/*  */}
          <div className="flex flex-col md:flex-row gap-10 py-10">
            <div className="box w-full bg-white md:w-96 h-56   flex px-8 shadow-lg justify-center rounded-xl flex-col items-start relative zoom-effect">
              <div className="absolute bottom-[200px] left-[295px] w-16 h-16 md:w-20 md:h-20 border-2 rounded-full flex justify-center items-center  border-custom-purple ">
                <img className="w-14" src={stay} alt="" />
              </div>
              <p>Stay Ahead with Industry Trends</p>
              <span className="text-sm font-light">
                Your success is our priority. We work <br /> closely with you
                every step of the way,
                <br /> ensuring that our solutions align with
                <br /> your vision and objectives.
              </span>
            </div>
            <div className="box w-full bg-white md:w-96 h-56 flex px-8 shadow-lg justify-center rounded-xl flex-col items-start relative zoom-effect">
              <div className="absolute bottom-[200px] left-[295px] w-16 h-16 md:w-20 md:h-20 border-2  rounded-full flex justify-center items-center  border-custom-purple ">
                <img className="w-14" src={datas} alt="" />
              </div>
              <p>Data Security</p>
              <span className="text-sm font-light">
                With great power comes great
                <br /> responsibility. We will never forget <br />
                the importance of ethics and
                <br /> privacy. auxzon always respect the rights of our
                customers, and ensure <br />
                that their data is handled with the <br /> utmost care and
                integrity.
              </span>
            </div>
          </div>
        </div>

        {/* --------------------------------- */}
      </div>
    </div>
  );
}

export default About;
