import React from "react";
import Link from "../../../components/link"
import Text from "../../../components/text";
import StyledBlockquote from "./styled-blockquote";

const Blockquote = (props) => {
    const {
        bgImage,
        bgLogo,
        bgColor,
        buttonHref,
        label,
        text,
      } = props;

    return (
    <StyledBlockquote bgColor={bgColor} bgImage={bgImage} bgLogo={bgLogo}>
        <div className="auth-quote-container">
            <Text
                fontSize={"24px"}
                color={"#333333"}
                fontWeight={"400"}
                lineHeight={"160%"}
            >
                {text}
            </Text>
            <Link 
                to={buttonHref}
                type={"external"}
                color={"#FF6F3D"}>
                {label}
            </Link>
      </div>
    </StyledBlockquote>
    )
}

export default Blockquote;