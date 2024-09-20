import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`love-more-content-wrapper ${className}`}>
      <div className="love-more-content">
        <div className="love-more-content-inner">
          <div className="frame-parent5">
            <div className="rectangle-parent2">
              <img
                className="frame-child4"
                alt=""
                src="/rectangle-1-3@2x.png"
              />
              <div className="love-more-parent">
                <div className="love-more">Love More</div>
                <img
                  className="teenyiconsarrow-right-solid4"
                  alt=""
                  src="/teenyiconsarrowrightsolid.svg"
                />
              </div>
            </div>
            <FrameComponent1
              rectangle2="/rectangle-2-2@2x.png"
              propWidth="193px"
              unitedByPlay="United By Play"
            />
          </div>
        </div>
        <div className="made-with-love-backed-by-resea-wrapper">
          <h1 className="made-with-love-container">
            <p className="made-with-love">
              <span>Made With</span>
              <span className="span">{` `}</span>
              <i className="span">{`Love `}</i>
            </p>
            <p className="made-with-love">
              <span>Backed By</span>
              <span className="span"> Research</span>
            </p>
          </h1>
        </div>
        <div className="line-parent">
          <div className="line-div" />
          <div className="sunflower-department-all-right-parent">
            <div className="sunflower-department-all">{`2024, SUNFLOWER DEPARTMENT ALL RIGHTS RESERVED `}</div>
            <div className="social-media">
              <div className="instagram">INSTAGRAM</div>
              <div className="twitter">TWITTER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
