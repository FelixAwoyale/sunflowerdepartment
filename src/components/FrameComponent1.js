import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  rectangle2,
  propWidth,
  unitedByPlay,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`rectangle-parent ${className}`}>
      <img className="frame-item" loading="lazy" alt="" src={rectangle2} />
      <div className="united-by-play-parent" style={frameDivStyle}>
        <div className="united-by-play">{unitedByPlay}</div>
        <img
          className="teenyiconsarrow-right-solid"
          alt=""
          src="/teenyiconsarrowrightsolid.svg"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  rectangle2: PropTypes.string,
  unitedByPlay: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent1;
