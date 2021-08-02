import React from 'react';
import Portal from "../portal";
import Text from "../text";
import CookieMess from "./styled-snackbar";
import Button from '../button';
import Link from "../link";



const Snackbar = (props) => {    
    
    return (
        <Portal >
            <CookieMess {...props}
            display={props.display}
            >
                <div className = "cookieMess_container">
                    <Text
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
                        { props.isButton &&
                            <Button
                            label= {props.buttonLabel}
                            typeButton= {"transparent"}
                            fontSize= {"12px"}
                            display= {"block"}
                            height ={"41px"}
                            onClick = {props.onClick}
                        />
                        }
                        
                    </div>
                </div>
            </CookieMess>
                
            
        </Portal>
        
    ); 
};

export default Snackbar;