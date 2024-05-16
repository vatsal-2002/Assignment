import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="enrollment-cards">
      <div className="wrapper-group-1000015032">
        <img
          className="wrapper-group-1000015032-child"
          alt=""
          src="/group-1000015032.svg"
        />
      </div>
      <div className="frame-group">
        <div className="enroll-for-datascience-bundle-parent">
          <div className="enroll-for-datascience-container">
            <b>{`Enroll for DataScience Bundle @₹1,499 `}</b>
            <span className="span6">₹2,600</span>
          </div>
          <div className="become-an-expert">
            Become an Expert in the data science field by enrolling into 6
            Extensive courses!
          </div>
        </div>
        <button className="icoutline-local-offer-parent">
          <img
            className="icoutline-local-offer-icon"
            alt=""
            src="/icoutlinelocaloffer.svg"
          />
          <div className="enroll-now1">Enroll Now</div>
        </button>
      </div>
      <div className="bundle-details-wrapper">
        <div className="bundle-details">
          <div className="total-number-of-courses-parent">
            <div className="total-number-of">Total number of Courses</div>
            <div className="course-number">6</div>
          </div>
          <div className="bundle-certificate-count">
            <div className="total-number-of1">Total number of Certificates</div>
            <div className="certificate-amount">6</div>
          </div>
          <div className="bundle-course-access">
            <div className="access-to-courses">Access to Courses</div>
            <div className="lifetime">Lifetime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
