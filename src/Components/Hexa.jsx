import React from "react";
import Hexag1 from "./Hexag1";
import "./Hexa.css";
import hexabg from "../assets/hexabg.png";
//
// import assess from "../icons/Assess.png";
// import achieve from "../icons/achieveicon.png";
// import act from "../icons/acticon.png";
// import advice from "../icons/adviceicon.png";
// import analyze from "../icons/analyzeicon.png";
// import assure from "../icons/assureicon.png";

import act from "../icons/actg.png";
import analyze from "../icons/book.png";
import assess from "../icons/handg.png";
import advice from "../icons/magg.png";
import assure from "../icons/thumb.png";
import achieve from "../icons/mang.png";
import Hexagon from "./Hexagon";

function Hexa() {
  return (
    <>
      <div
        className="total"
        style={{
          backgroundImage: `url(${hexabg})`,
          backgroundSize: "cover",
        }}
      >
        {/*--------------------------  */}
        {/* <div className="pt-6">
          <div className="flex justify-center items-center">
            <div className="container1 relative">
              <div
                className="hex pos0 flex justify-center items-center"
                style={{ backgroundImage: `url(${assess})` }}
              >
               
                <Hexagon />
              </div>
              <div
                className="hex pos1 flex justify-center items-center"
                style={{ backgroundImage: `url(${achieve})` }}
              >
              
              </div>
              <div
                className="hex pos2 flex justify-center items-center"
                style={{ backgroundImage: `url(${act})` }}
              >
             
              </div>
              <div
                className="hex pos4 flex justify-center items-center"
                style={{ backgroundImage: `url(${advice})` }}
              >
             
              </div>
              <div
                className="hex pos5 flex justify-center items-center"
                style={{ backgroundImage: `url(${analyze})` }}
              >
           
              </div>
              <div
                className="hex pos6 flex justify-center items-center"
                style={{ backgroundImage: `url(${assure})` }}
              >
               
              </div>
            </div>
          </div>
        </div> */}

        {/* Hexag1 Container */}
        <div className="hexag1-container">
          <div className="hexag1-row">
            <div className="flex flex-col justify-center items-center">
              <Hexag1 src={assess} alt="Assess" />
            </div>

            <div className="rectangle">
              This step involves thoroughly evaluating the current situation,
              and identifying challenges, opportunities, and key factors
              influencing the desired outcome. It includes gathering relevant
              data, conducting research, and analyzing information to gain a
              comprehensive understanding of the situation.
            </div>
          </div>
          <div className="hexag1-row">
            <div className="flex flex-col justify-center items-center">
              <Hexag1 src={achieve} alt="achieve" />
            </div>
            <div className="rectangle">
              After assessing the situation, this step entails providing expert
              advice and recommendations based on the findings. It involves
              leveraging knowledge, experience, and expertise to offer
              actionable insights, strategic guidance, and potential solutions
              to address identified challenges and capitalize on opportunities.
            </div>
          </div>
          <div className="hexag1-row">
            <div className="flex flex-col justify-center items-center">
              <Hexag1 src={act} alt="Assess" />
            </div>
            <div className="rectangle">
              This step involves implementing the recommended strategies, plans,
              or actions identified. It includes executing tasks, making
              decisions, allocating resources, and taking proactive measures to
              move forward with the desired goals and objectives.
            </div>
          </div>
          <div className="hexag1-row">
            <div className="flex flex-col justify-center items-center">
              <Hexag1 src={advice} alt="Assess" />
            </div>
            <div className="rectangle">
              Once the actions are taken, we monitor and evaluate the progress
              and outcomes of the implemented strategies. It includes collecting
              and analyzing data, measuring performance against predefined
              metrics and benchmarks, and identifying trends, patterns, and
              areas for improvement
            </div>
          </div>
          <div className="hexag1-row">
            <Hexag1 src={analyze} alt="Analyze" />
            <div className="rectangle">
              This step marks the attainment of the desired goals, objectives,
              or milestones defined at the outset of the journey making
              adjustments, refinements, or course corrections to the strategies
              or actions as needed. It involves celebrating successes,
              acknowledging achievements, and recognizing the efforts of all
              stakeholders involved in the process.
            </div>
          </div>
          <div className="hexag1-row">
            <Hexag1 src={assure} alt="Assure" />
            <div className="rectangle">
              Finally, this step involves ensuring ongoing support,
              sustainability, and continuous improvement beyond the achievement
              of initial goals. It includes implementing measures to maintain
              the momentum, optimize performance, and address any remaining
              challenges or opportunities to sustain long-term success.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hexa;
