import FrameComponent7 from "./FrameComponent7";
import "./MacBookAir.css";

const MacBookAir = () => {
  return (
    <div className="macbook-air-3">
      <FrameComponent7
        onlineLearning="/online-learning.svg"
        prop="24"
        courses="Courses"
      />
      <div className="learning-elements1" />
      <FrameComponent7
        onlineLearning="/graduated.svg"
        prop="30k+"
        courses="Learners"
        propMinWidth="101px"
        propMinWidth1="97px"
        propDisplay="inline-block"
      />
      <div className="learning-elements2" />
      <FrameComponent7
        onlineLearning="/question-mark.svg"
        prop="100k+"
        courses="Doubts Solved"
        propMinWidth="116px"
        propMinWidth1="unset"
        propDisplay="unset"
      />
      <div className="macbook-air-3-child" />
      <FrameComponent7
        onlineLearning="/complete.svg"
        prop="10k+"
        courses="Student Projects"
        propMinWidth="91px"
        propMinWidth1="unset"
        propDisplay="unset"
      />
    </div>
  );
};

export default MacBookAir;
