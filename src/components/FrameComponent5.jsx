import FrameComponent6 from "./FrameComponent6";
import "./FrameComponent5.css";

const FrameComponent5 = () => {
  return (
    <section className="course-curriculum-wrapper">
      <div className="course-curriculum">
        <div className="curriculum-content">
          <div className="curriculum-description">
            <div className="newbiefriendly-wrapper">
              <button className="newbiefriendly">
                <div className="newbie-friendly">
                  DATASCIENCE COURSE LEARNING PATH
                </div>
              </button>
            </div>
            <h1 className="data-science-course-container">
              <span className="data-science">Data Science</span>
              <span> Course Curriculum</span>
            </h1>
          </div>
        </div>
        <div className="course-options">
          <FrameComponent6
            c="C++"
            learnCForStrongProgrammin="Learn C++ for strong programming fundamentals."
          />
          <FrameComponent6
            c="MERN Stack"
            learnCForStrongProgrammin="Master the MERN stack for high-demand projects."
            propPadding="var(--padding-7xl) var(--padding-9xl) var(--padding-9xl)"
            propBorderTop="1px solid var(--woodsmoke-100)"
          />
          <FrameComponent6
            c={`Data Structure & Algorithm`}
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="var(--padding-7xl) var(--padding-9xl) var(--padding-9xl)"
            propBorderTop="1px solid var(--woodsmoke-100)"
          />
          <FrameComponent6
            c="Competitve Programming"
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="var(--padding-7xl) var(--padding-9xl) var(--padding-9xl)"
            propBorderTop="1px solid var(--woodsmoke-100)"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
