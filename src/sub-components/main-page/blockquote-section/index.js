import React from "react";
import Link from "../../../../components/link";
import Text from "../../../../components/text";
import StyledBlockquote from "./styled-blockquote";

const Blockquote = (props) => {
  const { label, text } = props;

  return (
    <StyledBlockquote>
      <div className="auth-quote-container">
        <Text
          fontSize={"24px"}
          color={"#333333"}
          fontWeight={"400"}
          lineHeight={"160%"}
        >
          {text}
        </Text>
        <Link href={"#"} type={"external"} color={"#FF6F3D"}>
          {label}
        </Link>
      </div>
    </StyledBlockquote>
  );
};

export default Blockquote;
