import { useMemo } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  onlineLearning,
  prop,
  courses,
  propMinWidth,
  propMinWidth1,
  propDisplay,
}) => {
  const detailsIconsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const coursesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propMinWidth1, propDisplay]);

  return (
    <div className="learning-elements">
      <div className="learning-content">
        <div className="learning-categories">
          <img
            className="online-learning-icon"
            loading="lazy"
            alt=""
            src={onlineLearning}
          />
        </div>
        <div className="category-details">
          <div className="details-icons" style={detailsIconsStyle}>
            {prop}
          </div>
          <div className="courses" style={coursesStyle}>
            {courses}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
