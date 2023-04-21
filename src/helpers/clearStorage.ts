export const clearStorage = () => {
  localStorage.removeItem("time");
  localStorage.removeItem("leftForThisWord");
  localStorage.removeItem("word");
  localStorage.removeItem("passedPoints");
  localStorage.removeItem("guessedPoints");
};
