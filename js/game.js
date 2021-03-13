const game = () => {
  let pScore = 0; // player score
  let cScore = 0; // computer score

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    [playerHand, computerHand].forEach(function (hand) {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });

    options.forEach(function (option) {
      option.addEventListener('click', function () {
        // взять рандомный выбор компьютера (через Math.random)
        // поменять фотки для рук человека и компьютера
        // проиграть анимацию shake
      });
    });
  };

  const updateScore = () => {};

  const compareHands = (playerChoice, computerChoice) => {};

  startGame();
  playMatch();
};

// play
game();