import React from "react";
import PropTypes from "prop-types";
import {StyledInfoPanel, StyledInfoPanelText, StyledInfoPanelImg} from "./styled-info-panel";
import Text from "../text/index";
import Button from "../button/index";

const InfoPanel = (props) => {
  
  if(props.imgleft){
    return(
      <StyledInfoPanel

      >
        <StyledInfoPanelText>
          <Text fontSize={props.fontSize} color={props.textColor}>{props.children}</Text>
          <Button></Button>
        </StyledInfoPanelText>
        <StyledInfoPanelImg>
          
        </StyledInfoPanelImg>
        
        
      </StyledInfoPanel>
    )
  } else {
    return(
      <StyledInfoPanel>
        <StyledInfoPanelImg>          
        </StyledInfoPanelImg>
        <StyledInfoPanelText>         
          <Text fontSize={props.fontSize} color={props.textColor}>{props.children}</Text>
          <Button></Button>
        </StyledInfoPanelText>        
      </StyledInfoPanel>
    )
  } 
 
}

InfoPanel.propTypes = {};

InfoPanel.defaultProps = {};

export default InfoPanel;


