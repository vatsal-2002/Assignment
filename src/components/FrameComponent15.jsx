import { useMemo } from "react";
import "./FrameComponent15.css";

const FrameComponent15 = ({
  c,
  learnCForStrongProgrammin,
  propPadding,
  propBorderTop,
}) => {
  const courseHighlightsStyle = useMemo(() => {
    return {
      padding: propPadding,
      borderTop: propBorderTop,
    };
  }, [propPadding, propBorderTop]);

  return (
    <div className="course-highlights" style={courseHighlightsStyle}>
      <div className="highlight-details">
        <div className="c1">{c}</div>
        <div className="learn-c-for1">{learnCForStrongProgrammin}</div>
      </div>
      <button className="highlight-icons">
        <img className="fi-br-eye-icon1" alt="" src="/fibreye1.svg" />
        <div className="text1">View Curriculum</div>
      </button>
    </div>
  );
};

export default FrameComponent15;
