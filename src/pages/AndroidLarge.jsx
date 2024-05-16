import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import "./AndroidLarge.css";

const AndroidLarge = () => {
  return (
    <div className="android-large-1">
      <header className="welcome-to-cuelab">
        <div className="logo">LOGO</div>
        <div className="manage-leads-from-multiple-sou">
          <div className="login">Login</div>
          <button className="heres-a-super-quick-seconds">
            <div className="signup">Signup</div>
          </button>
        </div>
      </header>
      <div className="convert">
        <div className="testimonials-content">
          <div className="overview-parent">
            <div className="overview">
              <div className="overview1">Overview</div>
            </div>
            <div className="frame-child" />
          </div>
          <div className="curriculum">Curriculum</div>
        </div>
        <div className="refund">Refund</div>
        <div className="testimonials">Testimonials</div>
      </div>
      <FrameComponent16 />
      <FrameComponent14 />
      <section className="limited-offer">
        <div className="offer-content">
          <FrameComponent13 />
          <FrameComponent12 />
        </div>
      </section>
      <FrameComponent11 />
      <section className="certificates">
        <div className="certificates-content">
          <h3 className="unlock-6-certificates-container">
            <span>{`Unlock `}</span>
            <span className="certificates1">6 Certificates</span>
            <span>{` & `}</span>
            <span className="internship-opportunities">
              Internship Opportunities!
            </span>
          </h3>
          <FrameComponent10 />
          <FrameComponent9 />
        </div>
      </section>
    </div>
  );
};

export default AndroidLarge;
