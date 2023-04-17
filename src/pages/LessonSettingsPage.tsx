import React from "react";
import { Helmet } from "react-helmet";
import LessonSettings from "../features/settings";

const LessonSettingsPage = () => {
  return (
    <>
      <Helmet title="Settings" />
      <LessonSettings />
    </>
  );
};

export default LessonSettingsPage;
