import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <FrameComponent3 />
      <section className="desktop-1-inner">
        <FrameComponent2 />
      </section>
      <FrameComponent4 />
    </div>
  );
};

export default Desktop;
