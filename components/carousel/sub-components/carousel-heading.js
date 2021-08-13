import React from "react";
import Heading from "../../heading";

const CarouselHeading = (props) => {
    const { item } = props;
    const { headingText, level, fontSize, lineHeight, textAlign, headingClassName } = item;
    const ClassName = headingClassName || "carousel-item-heading";

    return (
        <Heading
            level={level}
            fontSize={fontSize}
            lineHeight={lineHeight}
            textAlign={textAlign}
            className={ClassName}
        >
            {headingText}
        </Heading>
    );
}

export default CarouselHeading;