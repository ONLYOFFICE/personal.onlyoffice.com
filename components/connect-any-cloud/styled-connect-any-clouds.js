import { styled } from "linaria/react";

const StyledConnectAnyCloud = styled.div`
    h2 {
        display: block;
        color: #333;
    }

    .personal-social-links {
        margin: auto;
        padding: 0;
        max-width: 1119px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: space-between;
        -webkit-justify-content: space-between;
        -ms-flex-pack: space-between;
        justify-content: space-between;
  
        li {
          list-style-type: none;
          display: inline-block;
          margin: 0;
          margin: auto 0;
        }
    }
`;

export default StyledConnectAnyCloud;
