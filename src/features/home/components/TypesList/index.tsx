import React, { FocusEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../../../constants/routes";
import PopoverContent from "./PopoverContent";
import { IconTD, SelectList, TD, TR } from "./styles";

type SettingsProps = {
  isSettingsChecked: boolean;
};

const TypesList: React.FC<SettingsProps> = ({ isSettingsChecked }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SelectList>
      <tbody>
        <Link
          to={
            isSettingsChecked
              ? ROUTES.dynamic.wordsSettings(WordsRoutes.A1)
              : ROUTES.dynamic.wordsCard(WordsRoutes.A1)
          }
        >
          <TR>
            <IconTD>
              <span className="material-symbols-outlined">child_care</span>
            </IconTD>
            <TD flex={0.5}>Words A1</TD>
            <TD flex={1}>Very Easy</TD>
          </TR>
        </Link>
        <Link
          to={
            isSettingsChecked
              ? ROUTES.dynamic.wordsSettings(WordsRoutes.A2)
              : ROUTES.dynamic.wordsCard(WordsRoutes.A2)
          }
        >
          <TR>
            <IconTD>
              <span className="material-symbols-outlined">face</span>
            </IconTD>
            <TD flex={0.5}>Words A2</TD>
            <TD flex={1}>Easy</TD>
          </TR>
        </Link>
        <Link
          to={
            isSettingsChecked
              ? ROUTES.dynamic.wordsSettings(WordsRoutes.B1)
              : ROUTES.dynamic.wordsCard(WordsRoutes.B1)
          }
        >
          <TR>
            <IconTD>
              <span className="material-symbols-outlined">
                brightness_medium
              </span>
            </IconTD>
            <TD flex={0.5}>Words B1</TD>
            <TD flex={1}>Medium</TD>
          </TR>
        </Link>
        <Link
          to={
            isSettingsChecked
              ? ROUTES.dynamic.wordsSettings(WordsRoutes.B2)
              : ROUTES.dynamic.wordsCard(WordsRoutes.B2)
          }
        >
          <TR>
            <IconTD>
              <span className="material-symbols-outlined">balance</span>
            </IconTD>
            <TD flex={0.5}>Words B2</TD>
            <TD flex={1}>Hard</TD>
          </TR>
        </Link>
        <Link
          to={
            isSettingsChecked
              ? ROUTES.dynamic.wordsSettings(WordsRoutes.C1)
              : ROUTES.dynamic.wordsCard(WordsRoutes.C1)
          }
        >
          <TR>
            <IconTD>
              <span className="material-symbols-outlined">smart_toy</span>
            </IconTD>
            <TD flex={0.5}>Words C1</TD>
            <TD flex={1}>Very Hard</TD>
          </TR>
        </Link>
        <Link
          to={
            isSettingsChecked
              ? ROUTES.dynamic.wordsSettings(WordsRoutes.Animals)
              : ROUTES.dynamic.wordsCard(WordsRoutes.Animals)
          }
        >
          <TR>
            <IconTD>
              <span className="material-symbols-outlined">pets</span>
            </IconTD>
            <TD flex={0.5}>Animals</TD>
            <TD flex={1}>Not so Easy</TD>
          </TR>
        </Link>
        <TR
          disabled
          onBlur={handleBlur}
          onTouchStartCapture={handleOpen}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          {/*<Link to={ROUTES.dynamic.wordsCard(WordsRoutes.DontUse)}>*/}
          <IconTD>
            <span className="material-symbols-outlined">apartment</span>
          </IconTD>
          <TD flex={0.5}>&quot;Don`t use&quot;</TD>
          <TD flex={1}>Try to explain with rules</TD>
          {/*</Link>*/}
          <PopoverContent isOpen={isOpen} handleClose={handleClose} />
        </TR>
      </tbody>
    </SelectList>
  );
};

export default TypesList;
