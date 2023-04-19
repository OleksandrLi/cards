import React from "react";
import Checkbox from "../../../../shared/checkbox";
import { CheckboxTitleContainer } from "./styles";

type SettingsProps = {
  isChecked: boolean;
  toggleCheck: () => void;
};

const Settings: React.FC<SettingsProps> = ({ isChecked, toggleCheck }) => {
  return (
    <CheckboxTitleContainer>
      <Checkbox
        isChecked={isChecked}
        toggleCheck={toggleCheck}
        title={"Custom settings"}
      />
    </CheckboxTitleContainer>
  );
};

export default Settings;
