import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import StyledStar from "./styled-star";
import RatingImg from "../../../src/images/rating/star.react.svg";

const Star = ({ className, ...rest }) => {
  return(
        <StyledStar>
            <ReactSVG 
                src={RatingImg} 
                className={className}
                wrapper="svg"
             />
        </StyledStar>
        );
};

Star.propTypes = {
  /** Icon src */
  RatingImg: PropTypes.string,
  /** Image tab index */
  tabIndex: PropTypes.number,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

Star.defaultProps = {
  tabIndex: -1,
};

export default Star;
