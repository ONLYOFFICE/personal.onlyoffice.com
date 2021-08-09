import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import ReviewPanel from "../../../../components/review-panel";
import Heading from "../../../../components/heading";
import Text from "../../../../components/text";
import Link from "../../../../components/link";

import StyledReview from "./styled-review";
import { Reviews, Indx } from "./sub-components/review";

const ReviewSection = ({ t, ...rest }) => {
  const linkText = "Capterra.com";
  return (
    <StyledReview
      background={"#f9f9f9"}
      padding={"112px 0"}
      tabletPadding={"80px 0 96px"}
      mobileLPadding={"48px 0"}
      {...rest}
    >
      <Heading textAlign="center" level={3} className="review-heading">
        {t("AuthDocsHearTheWeb")}
      </Heading>
      <div className="review-panel-block">
        {Indx.map((it) => {
          return (
            <div className={`review-card`}>
              {Reviews.map(
                (item, idx) =>
                  item.indx === it && (
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
              )}
            </div>
          );
        })}
      </div>

      <Text
        className="review-description"
        textAlign="center"
        fontStyle="italic"
        lineHeight="160%"
      >
        <Trans i18nKey="AuthDocsDisclaimer" linkText="Capterra.com">
          The user reviews are taken from
          <Link href="https://www.capterra.com/">{{ linkText }}</Link>
        </Trans>
      </Text>
    </StyledReview>
  );
};

export default ReviewSection;
