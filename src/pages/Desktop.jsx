import FrameComponent8 from "../components/FrameComponent8";
import MacBookAir from "../components/MacBookAir";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-2">
      <section className="header">
        <FrameComponent8 />
        <div className="find-your-offer-wrapper">
          <div className="find-your-offer">
            <div className="alumni-initiative">
              <div className="alumni-description">
                <img
                  className="graduation-hat-icon"
                  loading="lazy"
                  alt=""
                  src="/graduation-hat.svg"
                />
                <div className="an-iit-delhi-container">
                  <span>An</span>
                  <span className="span">{` `}</span>
                  <span className="iit-delhi">IIT Delhi</span>
                  <span className="span1">{` `}</span>
                  <span>Alumni Initiative</span>
                </div>
              </div>
              <div className="become-an-expert-in-the-field-parent">
                <h1 className="become-an-expert-container">
                  <span>Become an Expert in the field of</span>
                  <span className="span2">{` `}</span>
                  <span className="data-science-with">
                    Data Science with 6 courses
                  </span>
                </h1>
                <div className="a-specially-crafted-container">
                  <span>{`A specially crafted Tech Kickstarter, with `}</span>
                  <span className="extensive-online-courses">
                    5+ extensive online courses.
                  </span>
                </div>
              </div>
              <div className="benefit-icons-parent">
                <button className="benefit-icons">
                  <img
                    className="award-star-icon"
                    alt=""
                    src="/award-star.svg"
                  />
                  <div className="personal-mentorship">Personal Mentorship</div>
                </button>
                <button className="payment">
                  <img
                    className="award-star-icon1"
                    alt=""
                    src="/award-star.svg"
                  />
                  <div className="internship-assistance">
                    Internship Assistance
                  </div>
                </button>
                <button className="award-star-parent">
                  <img
                    className="award-star-icon2"
                    alt=""
                    src="/award-star.svg"
                  />
                  <div className="industry-certified-courses">
                    Industry Certified Courses
                  </div>
                </button>
              </div>
            </div>
            <div className="action-buttons">
              <button className="enroll-now-parent">
                <div className="enroll-now">Enroll Now</div>
                <img
                  className="fi-br-paper-plane-icon"
                  alt=""
                  src="/fibrpaperplane.svg"
                />
              </button>
              <div className="solidbuttom">
                <div className="know-more">Know More</div>
                <img
                  className="fi-br-interrogation-icon"
                  alt=""
                  src="/fibrinterrogation.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <MacBookAir />
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className="enrollment-content-wrapper">
        <div className="enrollment-content">
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
