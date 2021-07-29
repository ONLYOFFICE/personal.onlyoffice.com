import { styled } from "linaria/react";
import { device } from "../../utils/devices";

const StyledGroupButton = styled.div`
display: flex;
padding-top: 24px;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
justify-content: center;
    a {
        padding: 4px;
    }

@media ${device.mobileL} {
flex-direction: column;
padding-top: 12px;
padding-bottom: 12px;
    button {
        width: 100%;
        min-width: 350px;
    }
}

@media ${device.mobileM} {
    button {
        width: 100%;
        min-width: 300px;
    }
}

@media ${device.mobileS} {
    button {
        width: 100%;
        min-width: 250px;
    }
}
`;

export default StyledGroupButton;