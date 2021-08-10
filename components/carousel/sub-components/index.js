import React, { useState } from "react";

const Image = ({
src,
defaultSrc,
isImage,
alt,
...rest
}) => {

const [errorLaodSrc, setErrorLaodSrc] = useState(true);

const onError = (e) => { 
  if(errorLaodSrc) { 
    setErrorLaodSrc(errorLaodSrc);
    e.target.src = defaultSrc;
  }
};

return (isImage ?
        <img 
            src={src} 
            alt={alt} 
            onError={onError}
            {...rest}                
        /> :
        <div 
          className="slick-slide-div" 
          style={{background:`url(${src})`}}            
        />
    );
}

export default Image;