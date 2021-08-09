import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledInfoPanelImg from "./styled-images-group";

const ImagePanel = ({ imgUrl, defaultImgUrl, ...rest }) => {
  const [errorLaodSrc, setErrorLaodSrc] = useState(true);

  const onError = (e) => {
    if (errorLaodSrc) {
      setErrorLaodSrc(errorLaodSrc);
      e.target.src = defaultImgUrl;
    }
  };

  return (
    <StyledInfoPanelImg {...rest}>
      <img src={imgUrl} onError={onError} />
    </StyledInfoPanelImg>
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
