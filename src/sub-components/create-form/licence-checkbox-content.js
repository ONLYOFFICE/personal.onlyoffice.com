import React from "react";
import { styled } from "linaria/react";

import Text from "../../../components/text";
import Link from "../../../components/link";

const StyledLicenceCheckbox = styled.div`
  width: max-content;
  max-width: calc(100% - 24px);
`;

const LicenseCheckboxContent = (props) => {
  const { t } = props;
  return (
    <StyledLicenceCheckbox>
      <Text as="span">{t("RegistrySettingTerms")}</Text>
      <Link className="licence-link">{t("TermAndCondition")}</Link>
      <Text as="span">{t("And")}</Text>
      <Link className="licence-link">{t("PrivacyStatement")}</Link>
    </StyledLicenceCheckbox>
  );
};

export default LicenseCheckboxContent;
