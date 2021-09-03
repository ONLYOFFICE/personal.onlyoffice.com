import React from "react";
import PropTypes from "prop-types";

const ImagePanel = ({ imgUrl, className, ...rest }) => {

  return (
    <div {...rest} className={`info-panel-image-group ${className}`}>
      <img 
        className="info-panel-img"
        src={imgUrl}
        alt="info-img"
      />
    </div>
  );
};

ImagePanel.propTypes = {
  imgUrl: PropTypes.string,
};

ImagePanel.defaultProps = {
  imgUrl: "",
};

export default ImagePanel;
