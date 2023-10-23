document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board > div');
    
    squares.forEach(square => {
      square.classList.add('square');
    });
  });

let currentPlayer = 'X'; // Initialize the current player

document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('#board > div');

  squares.forEach(square => {
    square.addEventListener('click', function () {
      if (!square.classList.contains('X') && !square.classList.contains('O')) {
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board > div');
  
    squares.forEach(square => {
      square.addEventListener('mouseenter', function () {
        square.classList.add('hover');
      });
  
      square.addEventListener('mouseleave', function () {
        square.classList.remove('hover');
      });
    });
  });

  function checkWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
  
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (squares[a].classList.contains('X') && squares[b].classList.contains('X') && squares[c].classList.contains('X')) {
        document.getElementById('status').textContent = 'Congratulations! X is the Winner!';
        document.getElementById('status').classList.add('you-won');
        return;
      } else if (squares[a].classList.contains('O') && squares[b].classList.contains('O') && squares[c].classList.contains('O')) {
        document.getElementById('status').textContent = 'Congratulations! O is the Winner!';
        document.getElementById('status').classList.add('you-won');
        return;
      }
    }
  }
  
  
document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board > div');
  
    squares.forEach(square => {
      square.addEventListener('click', function () {
        if (!square.classList.contains('X') && !square.classList.contains('O')) {
          square.classList.add(currentPlayer);
          square.textContent = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          checkWinner(); // Check for a winner after each move
        }
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board > div');
    const newGameButton = document.querySelector('.btn');
    
    newGameButton.addEventListener('click', function () {
      squares.forEach(square => {
        square.classList.remove('X', 'O');
        square.textContent = '';
      });
      document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
      document.getElementById('status').classList.remove('you-won');
      currentPlayer = 'X'; // Reset the current player to 'X'
    });
  });

  
document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board > div');
    const newGameButton = document.querySelector('.btn');
    
    newGameButton.addEventListener('click', function () {
      squares.forEach(square => {
        square.classList.remove('X', 'O');
        square.textContent = '';
      });
      document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
      document.getElementById('status').classList.remove('you-won');
      currentPlayer = 'X'; // Reset the current player to 'X'
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('#board > div');
  
    squares.forEach(square => {
      square.addEventListener('click', function () {
        if (!square.classList.contains('X') && !square.classList.contains('O')) {
          square.classList.add(currentPlayer);
          square.textContent = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          checkWinner(); // Call checkWinner after each move
        }
      });
    });
  });
  
  