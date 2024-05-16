import FrameComponent15 from "./FrameComponent15";
import "./FrameComponent14.css";

const FrameComponent14 = () => {
  return (
    <section className="course-curriculum1">
      <div className="course-curriculum2">
        <div className="curriculum-header">
          <button className="text-wrapper">
            <div className="text2">FULL STACK COURSE LEARNING PATH</div>
          </button>
          <h3 className="full-stack-developer-container">
            <span className="full-stack-developer">Full Stack Developer</span>
            <span> Course Curriculum</span>
          </h3>
        </div>
        <div className="curriculum-details">
          <FrameComponent15
            c="C++"
            learnCForStrongProgrammin="Learn C++ for strong programming fundamentals."
          />
          <FrameComponent15
            c="MERN Stack"
            learnCForStrongProgrammin="Master the MERN stack for high-demand projects."
            propPadding="var(--padding-lg) var(--padding-xl) var(--padding-xl)"
            propBorderTop="1px solid var(--color-darkslategray-100)"
          />
          <FrameComponent15
            c={`Data Structure & Algorithm`}
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="var(--padding-lg) var(--padding-xl) var(--padding-xl)"
            propBorderTop="1px solid var(--color-darkslategray-100)"
          />
          <FrameComponent15
            c="Competitve Programming"
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="var(--padding-lg) var(--padding-xl) var(--padding-xl)"
            propBorderTop="1px solid var(--color-darkslategray-100)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent14;
