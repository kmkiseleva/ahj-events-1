export default class GamePLay {
  constructor(container) {
    this.container = container;
    this.boardsize = 4;
    this.cells = [];
    this.currentPosition = null;
    this.score = 0;
    this.counter = 0;
  }

  // инит игры
  init() {
    this.drawGameBoard();
    this.killTheGoblin();
    setInterval(() => {
      this.generateTheGoblin();
    }, 1000);
  }

  // отрисовка поля и ячеек
  drawGameBoard() {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');

    for (let i = 0; i < this.boardsize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }

    this.cells = [...gameBoard.children];
    this.container.appendChild(gameBoard);
  }

  // генератор случайной ячейки и гоблина
  generateTheGoblin() {
    const randomCell = Math.floor(Math.random() * this.cells.length);
    if (this.currentPosition === randomCell) {
      this.generateTheGoblin();
      return;
    }

    this.removeTheGoblin();
    this.currentPosition = randomCell;

    const goblin = document.createElement('div');
    goblin.classList.add('goblin');
    this.cells[randomCell].appendChild(goblin);
    this.counter += 1;
    this.gameOver();
  }

  // удаление гоблина из ячейки
  removeTheGoblin() {
    if (this.currentPosition === null) {
      return;
    }
    this.cells[this.currentPosition].firstChild.remove();
  }

  killTheGoblin() {
    const score = document.getElementById('score');
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('goblin')) {
        this.score++;
        score.textContent = this.score;
        e.target.classList.remove('goblin');
        this.counter = 0;
      }
    });
  }

  gameOver() {
    const score = document.getElementById('score');
    if (this.counter === 5) {
      alert('GAME OVER!');
      this.counter = 0;
      this.score = 0;
      score.textContent = 0;
    }
  }
}
