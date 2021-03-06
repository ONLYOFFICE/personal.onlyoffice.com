import React, { useState, useEffect } from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../components/text";
import Link from "../../../components/link";
import Button from "../../../components/button";
import Portal from "../../../components/portal";
import Snackbar from "../../../components/snackbar";

import { getCookie, setCookie } from "../../helpers";
import { PERSONAL_COOKIE } from "../../helpers/constants";

import StyledCookieSnackbar from "./styled-cookie-snackbar";

const CookieSnackbar = ({ buttonLabel }) => {
  const [showCookieBar, setShowCookieBar] = useState(false);

  useEffect(() => {
    const isCookie = getCookie(PERSONAL_COOKIE);
    if (!isCookie) {
      setShowCookieBar(true);
    }
  }, []);

  const onSetCookie = () => {
    //document.cookie = `${PERSONAL_COOKIE}=true`;
    setCookie(PERSONAL_COOKIE, true, { "max-age": 31536000 });
    setShowCookieBar(false);
  };

  return (
    <Portal>
      <Snackbar isVisible={showCookieBar}>
        <StyledCookieSnackbar>
          <Text color="#333" fontSize="13px" className="cookie-text">
            <Trans i18nKey="CookieMessText">
              {" "}
              <Link
                className="cookie-link"
                href={
                  "https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.239950403.1196593722.1525950411-169631771.1404734630"
                }
                fontSize="13px"
              >
                {" "}
              </Link>
            </Trans>
          </Text>

          <Button
            className="cookie-button"
            label={buttonLabel}
            typeButton="transparent"
            fontSize="12px"
            height="41px"
            onClick={onSetCookie}
            minwidth="99px"
            isScale
            padding="0 10px"
          />
        </StyledCookieSnackbar>
      </Snackbar>
    </Portal>
  );
};

export default CookieSnackbar;
