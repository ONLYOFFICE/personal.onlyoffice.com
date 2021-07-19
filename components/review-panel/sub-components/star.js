import React from "react";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import StyledStar from "./styled-star";
import RatingImg from "../../../src/images/icons/star.react.svg";

const Star = ({ idStar, className, ...rest }) => {
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

};

Star.defaultProps = {};

export default Star;
