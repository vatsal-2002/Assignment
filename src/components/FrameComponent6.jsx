import { useMemo } from "react";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  c,
  learnCForStrongProgrammin,
  propPadding,
  propBorderTop,
}) => {
  const ametMinimMollitNonDeseruntStyle = useMemo(() => {
    return {
      padding: propPadding,
      borderTop: propBorderTop,
    };
  }, [propPadding, propBorderTop]);

  return (
    <div
      className="amet-minim-mollit-non-deserunt1"
      style={ametMinimMollitNonDeseruntStyle}
    >
      <div className="c-parent">
        <h3 className="c">{c}</h3>
        <div className="learn-c-for">{learnCForStrongProgrammin}</div>
      </div>
      <button className="payment-methods">
        <img className="fi-br-eye-icon" alt="" src="/fibreye.svg" />
        <div className="text">View Curriculum</div>
      </button>
    </div>
  );
};

export default FrameComponent6;
