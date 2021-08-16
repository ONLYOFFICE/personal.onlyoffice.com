import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

//import StyledInfoPanelImg from "./styled-image-group";

const ImagePanel = ({ imgUrl, defaultImgUrl, className, ...rest }) => {
  const onError = (e) => {
    return <ReactSVG className="info-panel-img" src={defaultImgUrl} />;
  };

  return (
    <div {...rest} className={`info-panel-image-group ${className}`}>
      <ReactSVG
        className="info-panel-img"
        src={imgUrl}
        fallback={onError}
        alt="info-img"
      />
    </div>
  );
};

ImagePanel.propTypes = {
  imgUrl: PropTypes.string,
  defaultImgUrl: PropTypes.string,
};

ImagePanel.defaultProps = {
  imgUrl: "",
  defaultImgUrl: "",
};

export default ImagePanel;
