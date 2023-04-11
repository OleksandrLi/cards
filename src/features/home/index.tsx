import React from "react";
import { Link } from "react-router-dom";
import { ROUTES, WordsRoutes } from "../../constants/routes";
import {
  HomeContainer,
  IconTD,
  NavigationTitle,
  SelectList,
  TD,
  TR,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <NavigationTitle>Select words type</NavigationTitle>
      <SelectList>
        <tbody>
          <Link to={ROUTES.dynamic.wordsCard(WordsRoutes.A1)}>
            <TR>
              <IconTD>
                <span className="material-symbols-outlined">child_care</span>
              </IconTD>
              <TD flex={0.4}>Words A1</TD>
              <TD flex={1}>Very Easy</TD>
            </TR>
          </Link>
          <Link to={ROUTES.dynamic.wordsCard(WordsRoutes.A2)}>
            <TR>
              <IconTD>
                <span className="material-symbols-outlined">face</span>
              </IconTD>
              <TD flex={0.4}>Words A2</TD>
              <TD flex={1}>Easy</TD>
            </TR>
          </Link>
          <Link to={ROUTES.dynamic.wordsCard(WordsRoutes.B1)}>
            <TR>
              <IconTD>
                <span className="material-symbols-outlined">
                  brightness_medium
                </span>
              </IconTD>
              <TD flex={0.4}>Words B1</TD>
              <TD flex={1}>Medium</TD>
            </TR>
          </Link>
          <Link to={ROUTES.dynamic.wordsCard(WordsRoutes.B2)}>
            <TR>
              <IconTD>
                <span className="material-symbols-outlined">balance</span>
              </IconTD>
              <TD flex={0.4}>Words B2</TD>
              <TD flex={1}>Hard</TD>
            </TR>
          </Link>
          <Link to={ROUTES.dynamic.wordsCard(WordsRoutes.C1)}>
            <TR>
              <IconTD>
                <span className="material-symbols-outlined">smart_toy</span>
              </IconTD>
              <TD flex={0.4}>Words C1</TD>
              <TD flex={1}>Very Hard</TD>
            </TR>
          </Link>
          <Link to={ROUTES.dynamic.wordsCard(WordsRoutes.Animals)}>
            <TR>
              <IconTD>
                <span className="material-symbols-outlined">pets</span>
              </IconTD>
              <TD flex={0.4}>Animals</TD>
              <TD flex={1}>Not so Easy</TD>
            </TR>
          </Link>
          <TR disabled>
            {/*<Link to={ROUTES.dynamic.wordsCard(WordsRoutes.DontUse)}>*/}
            <IconTD>
              <span className="material-symbols-outlined">apartment</span>
            </IconTD>
            <TD flex={0.4}>&quot;Don`t use&quot;</TD>
            <TD flex={1}>Try to explain with rules</TD>
            {/*</Link>*/}
          </TR>
        </tbody>
      </SelectList>
    </HomeContainer>
  );
};

export default Home;
