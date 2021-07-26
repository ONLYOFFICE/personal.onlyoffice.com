import React, { useState } from "react";

export default function Img({ imgUrl, defaultImgUrl, ...rest}) {
    const [errorLaodSrc, setErrorLaodSrc] = useState(true);
    console.log(defaultImgUrl);
    console.log(imgUrl);
    const onError = (e) => { 
      if(errorLaodSrc) { 
        setErrorLaodSrc(errorLaodSrc);
          e.target.src = defaultImgUrl;
      }
    };

    return(
        <img 
            src={imgUrl} 
            onError={onError}       
        />         
    );
}