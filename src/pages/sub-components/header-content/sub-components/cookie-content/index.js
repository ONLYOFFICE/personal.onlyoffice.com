import React, {useState} from 'react';
import PropTypes from "prop-types";
import Text from '../../../../../../components/text';
import Link from "../../../../../../components/link/";
import CookieMessContainer from "./styled-cookie-content"
import Button from '../../../../../../components/button';

const CookieContent = (props) => {

    
    const [display, setDisplay] = useState(true);
    const cookie = "onlyoffice_personal_cookie=true";  
    const setCookiesHandler = () => {
        document.cookie = cookie;
        setDisplay(!display);
    };


    return (
        <CookieMessContainer {...props}
        display={display}        
        >
            <Text
            color={"#333"}
            fontSize={"13px"}
            display= {"block"}
            >
                {props.text}
                
                <Link
                href={"https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.239950403.1196593722.1525950411-169631771.1404734630"}
                label={"privacy policy"}
                color={"#ff6f3d"}
                fontSize={"12px"}
                hoverTextDecoration={"none"}
                ></Link>
            </Text>
            <div className = "personalcookie">
                <Button
                    label= {props.buttonLabel}
                    typeButton= {"transparent"}
                    fontSize= {"12px"}
                    display= {"block"}
                    height ={"41px"}
                    onClick = {setCookiesHandler}
                />
                
            </div>
        </CookieMessContainer>
    );
};

CookieContent.propTypes = {
    /** CookieMessContainer back-ground color */
    backGround: PropTypes.string,        
    /** Width of CookieContent */
    width: PropTypes.string,
    /** Text */
    text: PropTypes.string,
    /** Button label */
    buttonLabel: PropTypes.bool,
    
  };
  
  CookieMessContainer.defaultProps = {
    backGround: "rgba(249,249,249,0.95)",    
    width: "544px",
    
  };

export default CookieContent;