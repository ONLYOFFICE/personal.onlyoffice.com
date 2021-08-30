import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { Base } from "../themes";

const StyledScrollbar = styled(Scrollbars)`
  .nav-thumb-vertical {
    background-color: ${(props) =>
      props.color
        ? props.color
        : props.theme.scrollbar.backgroundColorVertical};

    width: 5px;
    height: 245px;

    //background: #c1c1c1c1;
    opacity: 0.2;
    border-radius: 6px;
  }

  .nav-thumb-horizontal {
    background-color: ${(props) =>
      props.color
        ? props.color
        : props.theme.scrollbar.backgroundColorHorizontal};
  }
`;

StyledScrollbar.defaultProps = {
  theme: Base,
};

export default StyledScrollbar;
