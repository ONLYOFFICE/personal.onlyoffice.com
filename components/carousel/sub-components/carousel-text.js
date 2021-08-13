import React from "react";
import Text from "../../text";

const CarouselText = (props) => {
    const { item } = props;
    const { text, fontSize, lineHeight, textAlign, textClassName } = item;
    const ClassName = textClassName || "carousel-item-text";

    return (
        <Text
            fontSize={fontSize}
            lineHeight={lineHeight}
            textAlign={textAlign}
            className={ClassName}
        >
            {text}
        </Text>
    );
}

export default CarouselText;