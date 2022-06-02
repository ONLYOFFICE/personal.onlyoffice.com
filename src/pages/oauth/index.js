import React, { useEffect } from "react";
import Loader from "../../../components/loader";
import styled from "styled-components";
import { thirdPartyLogin } from "../../api";
import { navigate } from "gatsby";
import { redirectToMainPage, removeOAuthKey } from "../../helpers";

const StyledOAuth = styled.div`
  position: absolute;
  width: min-content;
  margin: auto;
  left: 50%;
  top: 30%;
`;

const OAuthPage = () => {
  useEffect(() => {
    const profile = localStorage.getItem("profile");

    if (!profile) {
      navigate("/");
      return;
    }

    thirdPartyLogin(profile)
      .then(() => {
        redirectToMainPage();
      })
      .catch((e) => {
        navigate("/", {
          state: {
            toastr: {
              error: true,
              isProviderError: true,
            },
          },
        });
      })
      .finally(() => {
        removeOAuthKey();
      });
  }, []);
  return (
    <StyledOAuth>
      <Loader className="loader-oauth" />
    </StyledOAuth>
  );
};

export default OAuthPage;
