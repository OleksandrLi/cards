export const getTimeForWord = () => {
  return localStorage.getItem("time");
};

export const getLeftTime = () => {
  return localStorage.getItem("leftForThisWord");
};

export const SAVED_WORD = localStorage.getItem("word");
export const PASSED_POINTS = localStorage.getItem("passedPoints");
export const GUESSED_POINTS = localStorage.getItem("guessedPoints");
