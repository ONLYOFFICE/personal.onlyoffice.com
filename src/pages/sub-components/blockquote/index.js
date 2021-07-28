import React from "react";
import { Link } from "gatsby";
import Text from "../../../../components/text";
import IconButton from "../../../../components/icon-button";
import StyledBlockquote from "./styled-blockquote";

const Blockquote = (props) => {
    const {
        bgImage,
        logoImage,
        buttonHref,
        label,
        text,
      } = props;

    <StyledBlockquote>
    <section>
        <IconButton>
            
        </IconButton>
        <Text>
            {text}
        </Text>
        <Link to={buttonHref}>
            {{label}}
      </Link>
    </section>
    </StyledBlockquote>
}

export default Blockquote;