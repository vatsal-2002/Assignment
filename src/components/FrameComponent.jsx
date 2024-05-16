import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="enrollment-cards1">
      <div className="bundle-details-parent">
        <div className="bundle-details1">
          <div className="bundle-content">
            <div className="enrollment-info">
              <div className="enrollment-info-child" />
              <div className="enroll-for-datascience-container1">
                <span className="enroll-for-datascience-container2">
                  <b>{`Enroll for DataScience Bundle @₹1,499 `}</b>
                  <span className="span7">₹2,600</span>
                </span>
              </div>
            </div>
            <div className="become-an-expert1">
              Become an Expert in the data science field by enrolling into 6
              Extensive courses!
            </div>
          </div>
          <button className="enrollment-button">
            <div className="button-content">
              <img
                className="icoutline-local-offer-icon1"
                alt=""
                src="/icoutlinelocaloffer.svg"
              />
            </div>
            <div className="enroll-now2">Enroll Now</div>
          </button>
        </div>
        <div className="bundle-meta">
          <div className="meta-data">
            <div className="meta-content">
              <div className="course-count">
                <div className="total-number-of2">Total number of Courses</div>
                <div className="course-count1">6</div>
              </div>
              <div className="certificate-count">
                <div className="total-number-of3">
                  Total number of Certificates
                </div>
                <div className="certificate-value">6</div>
              </div>
              <div className="course-access">
                <div className="access-to-courses1">Access to Courses</div>
                <div className="lifetime1">Lifetime</div>
              </div>
            </div>
            <img
              className="scribble-final-version-241"
              loading="lazy"
              alt=""
              src="/scribble-final-version24-1@2x.png"
            />
          </div>
        </div>
        <div className="ellipse-wrapper">
          <div className="frame-child1" />
        </div>
      </div>
      <div className="ellipse-group">
        <div className="frame-child2" />
        <div className="frame-child3" />
      </div>
    </div>
  );
};

export default FrameComponent;
