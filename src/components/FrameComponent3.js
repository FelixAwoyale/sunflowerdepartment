import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`frame-parent ${className}`}>
      <header className="frame-wrapper">
        <div className="frame-group">
          <div className="projects-wrapper">
            <a className="projects">PROJECTS</a>
          </div>
          <div className="projects-wrapper">
            <a className="playground">PLAYGROUND</a>
          </div>
          <div className="frame-container">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/frame-4.svg"
            />
          </div>
          <div className="projects-wrapper">
            <a className="playground">NEWS</a>
           
          </div>
          <div className="projects-wrapper">
            <a className="playground">SHOP</a>
           
          </div>
          <div className="projects-wrapper">
            <a className="playground">STUDIO</a>
           
          </div>
        </div>
      </header>
      <div className="banner-1-parent">
        <img className="banner-1-icon" alt="" src="/banner-1@2x.png" />
        <img
          className="eiarrow-up-icon"
          loading="lazy"
          alt=""
          src="/eiarrowup.svg"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
