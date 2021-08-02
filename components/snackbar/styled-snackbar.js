import { styled } from "linaria/react";



const CookieMess = styled.div`
bottom: 12px;
min-height: 40px;
position: fixed;
width: 100%;
z-index: 10;
display: ${props => props.display ? 'block': 'none' };



.cookieMess_container {    
    background: ${props => props.backGround ? props.backGround : "none"};
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 7px 15px rgb(85 85 85 / 10%);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 16px;
    width: ${props => props.width ? props.width : "100%"};;

        button {
            transition-duration: 0.3s;
        }
}

.personalcookie{
    margin-left: 24px;
}

@media screen and (max-width:592px) {
    .cookieMess_container {
        border-radius: 0;
        display: block;
        width: 100%;

        p {
            font-size: 12px;
        }
        a span{
            font-size: 12px;
        }
    }
    .personalcookie{
        margin: 16px 0 0;

        button{
            display:block;
            width:100%
        }
    }
}
`;



export default CookieMess;