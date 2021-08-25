import React from "react";
import styled from "styled-components";
import { Trans } from "gatsby-plugin-react-i18next";

import Link from "../../../components/link";
import Text from "../../../components/text";

const StyledLicenceCheckbox = styled.div`
  width: max-content;
  max-width: calc(100% - 24px);
`;

const LicenseCheckboxContent = (props) => {
  const { t } = props;

  const terms = t("TermAndCondition");
  const privacy = t("PrivacyStatement");

  return (
    <StyledLicenceCheckbox>
      <Text>
        <Trans
          i18nKey="RegistrySettingTerms"
          terms={t("TermAndCondition")}
          privacy={t("PrivacyStatement")}
        >
          I agree to ONLYOFFICE
          <Link href="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=4543205&doc=VXlOK1NnMVdIYStuSFpMeFR4UVpmNE5VS3VTdENYdU50WjJ5Unh0OERiUT0_IjQ1NDMyMDUi0">
            {{ terms }}
          </Link>
          <Link href="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.248662407.1867121315.1526272545-169631771.1404734630">
            {{ privacy }}
          </Link>
        </Trans>
      </Text>
    </StyledLicenceCheckbox>
  );
};

export default LicenseCheckboxContent;
