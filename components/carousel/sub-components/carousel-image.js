import React, { useState } from "react";

const Image = (props) => {
  const { item } = props;
  const { src, defaultSrc, alt, imageClassName } = item;
  const ClassName = imageClassName || "carousel-item-image";

  const [errorLaodSrc, setErrorLaodSrc] = useState(true);

  const onError = (e) => {
    if (errorLaodSrc) {
      setErrorLaodSrc(errorLaodSrc);
      e.target.src = defaultSrc;
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={ClassName}
      onError={onError}
    />
  );
}

export default Image;