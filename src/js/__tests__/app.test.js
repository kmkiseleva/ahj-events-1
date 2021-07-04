// tests just for demo
import GamePlay from '../GamePLay';

const gameContainer = document.getElementById('game-container');
const gamePlay = new GamePlay(gameContainer);

test('Boardsize', () => {
  expect(gamePlay.boardsize).toBe(4);
});
