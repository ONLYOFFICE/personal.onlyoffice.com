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
        /*:hover{ 
            svg{
                opacity: 0.8;  
                background: transparent;
            }            

            button{
                opacity: 0.8;  
                background: transparent;
            }
        }*/    
    }
    
@media ${device.mobileL} {
flex-direction: column;
padding-top: 12px;
padding-bottom: 12px;
    a {
        margin: 0 auto;
    }
    button {
        width: calc(100% - 40px);
        min-width: 300px;
    }
}

@media ${device.mobileM} {
    button {
        width: 100%;
        min-width: 280px;
    }
}

@media ${device.mobileS} {
    button {
        width: 100%;
        min-width: 220px;
    }
}
`;

export default StyledGroupButton;