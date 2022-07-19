import { createContext } from 'react';

const MatchContext = createContext({
  state: null,
  prevIndex: null,
  nextPlayer: null,
  movesX: null,
  movesO: null,
  isMatchEnd: null,
  winner: null
});

const ThemeContext = createContext({
  theme: null,
  bgColor: null,
  fgColor: null,
  toogleTheme: null
});

export { MatchContext, ThemeContext };
