import React from "react";
import { Link } from "react-router-dom";
// import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import { DATA_LIST } from "../../../../data/wordsArrays/dataList";
// import PopoverContent from "./PopoverContent";
import { IconTD, SelectList, TD, TR } from "./styles";

type SettingsProps = {
  isSettingsChecked: boolean;
};

const TypesList: React.FC<SettingsProps> = ({ isSettingsChecked }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  //
  // const handleOpen = () => {
  //   setIsOpen(true);
  // };
  //
  // const handleBlur = (e: FocusEvent) => {
  //   if (!e.currentTarget.contains(e.relatedTarget)) {
  //     setIsOpen(false);
  //   }
  // };
  //
  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <SelectList>
      <tbody>
        {DATA_LIST.map((item) => {
          return (
            <Link
              key={item.id}
              to={isSettingsChecked ? item.settingsRoute : item.wordRoute}
            >
              <TR>
                <IconTD>
                  <span className="material-symbols-outlined">
                    {item.iconSpan}
                  </span>
                </IconTD>
                <TD flex={0.5}>{item.title}</TD>
                <TD flex={1}>{item.describe}</TD>
              </TR>
            </Link>
          );
        })}
      </tbody>
    </SelectList>
  );
};

export default TypesList;
