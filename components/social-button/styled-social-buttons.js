import { styled } from "linaria/react";

const StyledSocialButton = styled.div`
  display: flex;
  width: max-content;
  height: "40px";
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid transparent;

  box-shadow: 0px 0px 1px #e6e6e6, 0px 1px 1px #d4d4d4;
  border-radius: 3px;
  background-color: #fff;
  padding: 6px;

  .social-button-img {
    bottom: 11px;
  }
`;

export default StyledSocialButton;
