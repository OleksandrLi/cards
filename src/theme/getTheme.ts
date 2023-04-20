export const setSettingsTheme = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getSettingsTheme = (key: string) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
