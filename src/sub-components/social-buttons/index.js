import React, { useEffect, useState, useCallback } from "react";
import SocialButton from "../../../components/social-button";
import { getAuthProviders } from "../../api";
import toastr from "../../../components/toast/toastr";

import StyledSocialButtons from "./styled-social-buttons";

import { thirdPartyLogin } from "../../api";

const providersIcons = [
  {
    name: "Google",
    icon: "/site-assets/social-icons/google.react.svg",
  },
  {
    name: "Facebook",
    icon: "/site-assets/social-icons/facebook.react.svg",
  },
  {
    name: "LinkedIn",
    icon: "/site-assets/social-icons/linkedin.react.svg",
  },
];

const SocialButtons = ({ t, isDisabled }) => {
  const [providers, setProviders] = useState();

  const authCallback = useCallback(
    (profile) => {
      thirdPartyLogin(profile.Serialized)
        .then(() => {
          window.location.href = "/";
        })
        .catch(() => {
          toastr.error(t("ProviderNotConnected"));
        });
    },
    [t]
  );
  useEffect(() => {
    window.authCallback = authCallback;
    getAuthProviders()
      .then((providers) => {
        setProviders(providers);
      })
      .catch((err) => console.log(err));
  }, [authCallback]);

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

  const onSocialButtonClick = (e) => {
    if (isDisabled) return false;
    const targetButton = e.target.closest(".social-button");
    if (!targetButton) toastr.error(t("SomethingWentWrong"));
    const providerName = targetButton.dataset.providername;
    const url = targetButton.dataset.url;

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

  const renderButtons = () => {
    const providerButtons = providersIcons.map((el) => {
      const provider =
        providers &&
        providers.find(
          (item) =>
            item.provider.toLocaleLowerCase() === el.name.toLocaleLowerCase()
        );

      return (
        <SocialButton
          key={el.name}
          iconName={el.icon}
          dataUrl={provider?.url}
          dataProvidername={provider?.provider}
          onClick={onSocialButtonClick}
          isDisabled={isDisabled || !provider}
        />
      );
    });

    return providerButtons;
  };

  const providerButtons = renderButtons();

  return <StyledSocialButtons>{providerButtons}</StyledSocialButtons>;
};

export default SocialButtons;
