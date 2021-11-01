import React from "react";

const ImagePanel = ({ imageData, ...rest }) => {
  const { className, imageUrl } = imageData;

  return (
    <div {...rest} className={`info-panel-image-group ${className}`}>
      <img className="info-panel-img" src={imageUrl} alt="info-img" />
    </div>
  );
};

export default ImagePanel;
