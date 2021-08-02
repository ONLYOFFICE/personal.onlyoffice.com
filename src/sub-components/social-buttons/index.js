import React, { useEffect, useState } from "react";
import SocialButton from "../../../components/social-button";
import { getAuthProviders } from "../../api";

import StyledSocialButtons from "./styled-social-buttons";

const providersData = Object.freeze({
  Google: {
    icon: "/social-icons/google.react.svg",
  },
  Facebook: {
    icon: "/social-icons/facebook.react.svg",
  },
  LinkedIn: {
    icon: "/social-icons/linkedin.react.svg",
  },
});

const SocialButtons = () => {
  const [providers, setProviders] = useState();

  useEffect(() => {
    getAuthProviders()
      .then((providers) => {
        setProviders(providers);
      })
      .catch((err) => console.log(err));
  }, []);

  const getLoginLink = (token, code) => {
    return `/login.ashx?p=${token}&code=${code}`;
  };

  const getOAuthToken = (tokenGetterWin) => {
    return new Promise((resolve, reject) => {
      localStorage.removeItem("code");
      let interval = null;
      interval = setInterval(() => {
        try {
          const code = localStorage.getItem("code");

          if (code) {
            localStorage.removeItem("code");
            clearInterval(interval);
            resolve(code);
          } else if (tokenGetterWin && tokenGetterWin.closed) {
            clearInterval(interval);
            reject();
          }
        } catch (err) {
          console.log(err);
        }
      }, 500);
    });
  };

  const onSocialButtonClick = (e, item) => {
    const { providerName, url } = item;

    try {
      const tokenGetterWin = window.open(
        url,
        "login",
        "width=800,height=500,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=no"
      );

      getOAuthToken(tokenGetterWin).then((code) => {
        const token = window.btoa(
          JSON.stringify({
            auth: providerName,
            mode: "popup",
            callback: "authCallback",
          })
        );

        tokenGetterWin.location.href = getLoginLink(token, code);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const providerButtons = () => {
    const providerButtons =
      providers &&
      providers.map((item) => {
        if (!providersData[item.provider]) return;

        const { icon } = providersData[item.provider];

        return (
          <SocialButton
            key={item.provider}
            iconName={icon}
            data-url={item.url}
            data-providername={item.provider}
            onClick={(e) => onSocialButtonClick(e, item)}
          />
        );
      });

    return providerButtons;
  };

  return <StyledSocialButtons>{providerButtons()}</StyledSocialButtons>;
};

export default SocialButtons;
