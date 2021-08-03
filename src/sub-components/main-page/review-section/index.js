import React from "react";

import ReviewPanel from "../../../../components/review-panel";
import Heading from "../../../../components/heading";
import Text from "../../../../components/text";
import Link from "../../../../components/link";

import Section from "../../home-section";
import StyledReview from "./styled-review";
import Review from "./sub-components/review";

const ReviewSection = ({
header, 
textFrontLink,
textLink, 
hrefLink, 
textAfterLink, 
...rest
}) => {
    return (
        <Section 
              background= {"#f9f9f9"}
              padding= {"50px 0 200px 0"}
              tabletPadding={"50px 0 250px 0"}
              mobileLPadding={"50px 0 260px 0"}
          {...rest}
        >
            <StyledReview>
                <Heading textAlign="center">{header}</Heading> 
                <div className="review-panel-block">     
                    {
                        Review.map((item, idx) => 
                            <ReviewPanel 
                                key={idx}
                                margin={"0px"}
                                paddingBottomHeader={"1px"}                             
                                className={item.className}
                                headerText={item.fullName}
                                countStar={item.rating}
                                mainText={item.review}
                            />
                        )
                    }
                </div>          
                <Text textAlign="center">{textFrontLink}<Link href={hrefLink}>{textLink}</Link>{textAfterLink}</Text>
            </StyledReview>
        </Section>
    );
}

export default ReviewSection;