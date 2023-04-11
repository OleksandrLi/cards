import React from "react";
import { IconTD, NavigationTitle, SelectList, TD } from "./styles";

const Navigation = () => {
  return (
    <div>
      <NavigationTitle>Select words type</NavigationTitle>
      <SelectList>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">child_care</span>
          </IconTD>
          <TD flex={0.4}>Words A1</TD>
          <TD flex={1}>Very Easy</TD>
        </tr>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">face</span>
          </IconTD>
          <TD flex={0.4}>Words A2</TD>
          <TD flex={1}>Easy</TD>
        </tr>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">brightness_medium</span>
          </IconTD>
          <TD flex={0.4}>Words B1</TD>
          <TD flex={1}>Medium</TD>
        </tr>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">balance</span>
          </IconTD>
          <TD flex={0.4}>Words B2</TD>
          <TD flex={1}>Hard</TD>
        </tr>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">smart_toy</span>
          </IconTD>
          <TD flex={0.4}>Words C1</TD>
          <TD flex={1}>Very Hard</TD>
        </tr>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">pets</span>
          </IconTD>
          <TD flex={0.4}>Animals</TD>
          <TD flex={1}>Not so Easy</TD>
        </tr>
        <tr>
          <IconTD>
            <span className="material-symbols-outlined">apartment</span>
          </IconTD>
          <TD flex={0.4}>&quot;Don`t use&quot;</TD>
          <TD flex={1}>Try to explain with rules</TD>
        </tr>
      </SelectList>
    </div>
  );
};

export default Navigation;
