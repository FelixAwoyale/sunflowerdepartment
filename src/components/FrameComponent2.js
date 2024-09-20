import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="cursor-5-parent">
        <img className="cursor-5-icon" alt="" src="/cursor-5.svg" />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </div>
      <div className="frame-parent1">
        <div className="frame-parent2">
          <div className="rectangle-group">
            <img
              className="rectangle-icon"
              loading="lazy"
              alt=""
              src="/rectangle-4@2x.png"
            />
            <div className="studio-name">
              <div className="the-sunflower-department">
                The Sunflower Department is a design studio by Nigerian designer
                Niyi Okeowo, the studio focuses on multiple areas of design and
                technology, from gaming, music, fashion, product and
                experiential design.
              </div>
            </div>
          </div>
          <img
            className="frame-child1"
            loading="lazy"
            alt=""
            src="/rectangle-5@2x.png"
          />
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent3">
            <div className="rectangle-container">
              <img
                className="frame-child2"
                alt=""
                src="/rectangle-1-1@2x.png"
              />
              <div className="sonder-parent">
                <div className="sonder">Sonder</div>
                <img
                  className="teenyiconsarrow-right-solid1"
                  loading="lazy"
                  alt=""
                  src="/teenyiconsarrowrightsolid.svg"
                />
              </div>
            </div>
            <FrameComponent1
              rectangle2="/rectangle-2@2x.png"
              unitedByPlay="United By Play"
            />
          </div>
        </div>
        <div className="frame-wrapper2">
          <div className="frame-parent4">
            <FrameComponent1
              rectangle2="/rectangle-2-1@2x.png"
              propWidth="139px"
              unitedByPlay="Porte One"
            />
            <div className="rectangle-parent1">
              <img
                className="frame-child3"
                alt=""
                src="/rectangle-1-2@2x.png"
              />
              <div className="sonder-parent">
                <div className="sunny">Sunny</div>
                <img
                  className="teenyiconsarrow-right-solid1"
                  alt=""
                  src="/teenyiconsarrowrightsolid.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper3">
          <div className="champs-parent">
            <div className="champs">Champs</div>
            <img
              className="teenyiconsarrow-right-solid1"
              alt=""
              src="/teenyiconsarrowrightsolid.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
