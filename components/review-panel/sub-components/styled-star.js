import { css } from '@linaria/core';
//import { Base } from "../../themes";
import { styled } from "linaria/react";


const StyledStar = styled.div`
padding: 0;
margin: 0;
svg{
    width: 14px;
    height: 14px;
}
.star-class-gold {
        svg{
            path{
                fill: #333;
            }
        }
}
`;

//StyledStar.defaultProps = { theme: Base };

export default StyledStar;