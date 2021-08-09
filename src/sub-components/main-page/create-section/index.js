import React from "react";

import Heading from "../../../../components/heading";
import Text from "../../../../components/text";

import StyledCreateSection from "./styled-create-section";
import CreateForm from "../../create-form";

const CreateSection = ({ t }) => {
  return (
    <StyledCreateSection>
      <div className="text-block">
        <Heading className="heading" fontSize="48px">
          {t("AuthDocsTitle")}
        </Heading>
        <Text className="description" fontSize="18px">
          {t("HomeDescription")}
        </Text>
      </div>
      <div className="form-block">
        <CreateForm t={t} isPanel />
      </div>
    </StyledCreateSection>
  );
};

export default CreateSection;
