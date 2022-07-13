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

export default MatchContext;
