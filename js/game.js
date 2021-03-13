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
        const computerOptions = ['rock', 'paper', 'scissors'];
        const randomNumber0to2 = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randomNumber0to2];

        setTimeout(() => {
          // сравниваем ручки
          compareHands(this.textContent, computerChoice);

          // поменять фотки для рук человека и компьютера
          playerHand.src = `assets/${this.textContent}.png`;
          computerHand.src = `assets/${computerChoice}.png`;
        }, 2000);

        // проиграть анимацию shake
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const result = document.querySelector('.result-text');

    const lowercasePlayerChoice = playerChoice.toLowerCase();
    const lowercaseComputerChoice = computerChoice.toLowerCase();

    if (lowercasePlayerChoice === lowercaseComputerChoice) {
      result.textContent = 'Ничья';
      return;
    }

    function setupVictoryOption(playerOption, computerOption) {
      if (lowercasePlayerChoice === playerOption) {
        if (lowercaseComputerChoice === computerOption) {
          result.textContent = 'Игрок выиграл!';
          pScore++;
        } else {
          result.textContent = 'Компьютер выиграл!';
          cScore++;
        }
        updateScore();
        return;
      }
    }

    // Настройка наших условий для победы
    setupVictoryOption('rock', 'scissors');
    setupVictoryOption('paper', 'rock');
    setupVictoryOption('scissors', 'paper');
  };

  startGame();
  playMatch();
};

// play
game();
