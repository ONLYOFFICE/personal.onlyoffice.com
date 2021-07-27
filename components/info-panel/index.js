import React, {useState} from "react";
import PropTypes from "prop-types";
import {StyledInfoPanel, StyledInfoPanelText, StyledInfoPanelImg,StyledGroupButton} from "./styled-info-panel";
import Text from "../text/index";
import Button from "../button/index";
import Img from "./img";
const InfoPanel = ({
  bgColor,
  children,
  lineHeight,
  fontSize, 
  textColor,
  textAlign,
  imgUrl, 
  defaultImgUrl, 
  ...rest
}) => {
  if(rest.imgleft){
    return(
      <StyledInfoPanel bgColor={bgColor}>
        <StyledInfoPanelText>
          <Text 
            lineHeight={lineHeight || "28px"} 
            fontSize={fontSize || "22px"} 
            color={textColor}
            textAlign={textAlign || "center"}
          >
            {children}
          </Text>   
        <StyledGroupButton>
          {(rest.countButton).map((item, i) => 
              <a key={i} href={item.href}>
                <Button
                  icon={item.iconButton}
                  type={item.typeButton}
                  label={item.textButton}
                />
              </a> 
            )}                                 
          </StyledGroupButton>     
        </StyledInfoPanelText>
        <StyledInfoPanelImg>
          <Img            
            imgUrl={imgUrl} 
            defaultImgUrl={defaultImgUrl}
          />         
        </StyledInfoPanelImg>        
      </StyledInfoPanel>
  )} 
  else {
    return(
      <StyledInfoPanel>
        <StyledInfoPanelImg
          imgUrl={rest.imgUrl}
        >          
        </StyledInfoPanelImg>
        <StyledInfoPanelText>         
          <Text 
          fontSize={rest.fontSize} 
          color={rest.textColor}
          lineHeight={rest.lineHeight}
          >
            {rest.children}
          </Text>
          <Button></Button>
        </StyledInfoPanelText>        
      </StyledInfoPanel>
    )
  } 
 
}

InfoPanel.propTypes = {};

InfoPanel.defaultrest = {};

export default InfoPanel;


