import "./FrameComponent16.css";

const FrameComponent16 = () => {
  return (
    <section className="enrollment">
      <div className="capture">
        <img
          className="graduation-hat-icon1"
          loading="lazy"
          alt=""
          src="/graduation-hat.svg"
        />
        <div className="an-iit-delhi-container1">
          <span>An</span>
          <span className="span8">{` `}</span>
          <span className="iit-delhi1">IIT Delhi</span>
          <span className="span9">{` `}</span>
          <span>Alumni Initiative</span>
        </div>
      </div>
      <div className="expertise">
        <div className="become-an-expert-in-the-field-group">
          <h1 className="become-an-expert-container1">
            <span>{`Become an Expert in the field of `}</span>
            <span className="data-science-with1">
              Data Science with 6 Courses!
            </span>
          </h1>
          <div className="a-specially-crafted-container1">
            <span className="a-specially-crafted">
              A specially crafted Tech Kickstarter, with
            </span>
            <span className="extensive-online-courses1">
              {" "}
              5+ extensive online courses.
            </span>
          </div>
        </div>
        <div className="course-benefits">
          <button className="main">
            <div className="personal-mentorship1">Personal Mentorship</div>
          </button>
          <button className="benefits-list">
            <div className="internship-assistance1">Internship Assistance</div>
          </button>
          <button className="effortlessly-manage-collaborat">
            <div className="industry-certified-courses1">
              Industry Certified Courses
            </div>
          </button>
        </div>
      </div>
      <button className="enrollment-buttons">
        <div className="enroll-now3">Enroll Now</div>
        <img
          className="fi-br-paper-plane-icon1"
          alt=""
          src="/fibrpaperplane1.svg"
        />
      </button>
      <div className="enrollment-buttons1">
        <div className="know-more1">Know More</div>
        <img
          className="fi-br-interrogation-icon1"
          loading="lazy"
          alt=""
          src="/fibrinterrogation.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent16;
