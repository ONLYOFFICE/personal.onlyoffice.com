import { styled } from "linaria/react";

const StyledStar = styled.div`
padding: 0;
margin: 0;
svg{
    width: 16px;
    height: 16px;
}
.star-class-gold {
        svg{
            path{               
                fill: #FF6F3D;
            }
        }
}
`;

export default StyledStar;