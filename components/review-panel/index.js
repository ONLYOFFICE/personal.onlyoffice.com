import React from "react";
import PropTypes from "prop-types";
import StyledReviewPanel from "./styled-review-panel";
import Text from "../text";
import Rating from "./sub-components/rating";
const ReviewPanel = (props) => {
  return (
        <StyledReviewPanel {...props}>
          <div className={"headerReviewPanel"}>
            <Text></Text>
            <Rating />
          </div>
          <Text></Text>
        </StyledReviewPanel>
      );
};

ReviewPanel.propTypes = {};

ReviewPanel.defaultProps = {};

export default ReviewPanel;
