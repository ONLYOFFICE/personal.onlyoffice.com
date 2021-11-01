import React from "react";
import PropTypes from "prop-types";
import StyledReviewPanel from "./styled-review-panel";
import Text from "../text";
import Rating from "./sub-components/rating";

const ReviewPanel = ({
  className,
  styledHeaderText,
  styledMainText,
  headerText,
  countStar,
  mainText,
  ...rest
}) => {
  return (
    <StyledReviewPanel {...rest} className={className}>
      <div className={"headerReviewPanel"}>
        <Text fontSize="13px" fontWeight="700" style={styledHeaderText}>
          {headerText}
        </Text>
        <Rating countStar={countStar} />
      </div>
      <Text
        fontSize="16px"
        lineHeight="26px"
        className="review-panel-main-text"
        style={styledMainText}
      >
        {mainText}
      </Text>
    </StyledReviewPanel>
  );
};

ReviewPanel.propTypes = {
  /** Header text rewiew */
  headerText: PropTypes.string,
  /** Main text rewiew */
  mainText: PropTypes.string,
  /** Rating star */
  countStar: PropTypes.number,
  /** Accepts header text CSS style */
  styledHeaderText: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Accepts main text CSS style */
  styledMainText: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**   tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

ReviewPanel.defaultProps = {
  headerText: "",
  mainText: "",
  countStar: 0,
  tabIndex: -1,
};

export default ReviewPanel;
