import React from "react";
import { Trans } from 'react-i18next'

import Heading from "../../../../components/heading";
import Text from "../../../../components/text";

import StyledCreateSection from "./styled-create-section";
import CreateForm from "../../create-form";

const CreateSection = ({ t, currentLanguage }) => {
  return (
    <StyledCreateSection>
      <div className="text-block">
        <Heading className="heading" level={1}>
          {t("AuthDocsTitle")}
        </Heading>
        <Text className="description">
          <Trans i18nKey="AuthDocsSubtitle100">
            100% compatible<pre></pre> with Microsoft Office formats
          </Trans>
        </Text>
      </div>
      <div className="form-block">
        <CreateForm t={t} isPanel currentLanguage={currentLanguage} />
      </div>
    </StyledCreateSection>
  );
};

export default CreateSection;
