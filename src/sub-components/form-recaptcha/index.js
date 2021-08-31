import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITEKEY = "6LeZIDccAAAAAK5_--NE0ykASDtXypFlq8HwmZ43";

const ReCaptcha = ({
    captchaRef,
    onChange,
    ...rest
}) => {
    return(
        <ReCAPTCHA
            ref={captchaRef} 
            size="invisible"
            sitekey={SITEKEY}
            onChange={onChange}     
            style={{visibility: "hidden"}}     
        />
    );
}

export default ReCaptcha;