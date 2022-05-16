// React
import { useCallback, useEffect, useState } from 'react';

// Components
import { StartScreen } from './components/StartScreen';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';

// data
import { wordsList } from './data/words';

// CSS
import './App.css'


const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

const guessesQty = 5;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  function pickWordAndCategory() {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }

  // starts the game
  function startGame() {
    // pick a word an pick category
    const { category, word } = pickWordAndCategory();

    // create an array of letters
    const wordLetters = word.toLowerCase().split('');

    // fill the states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }

  // process the letter input
  function verifyLetter(letter) {
    const normalizedLetter = letter.toString().toLowerCase();

    // check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return;

    // push a guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((prevGuessedLetters) => [
        ...prevGuessedLetters, normalizedLetter
      ]);
    } else {
      setWrongLetters((prevWrongLetters) => [
        ...prevWrongLetters, normalizedLetter
      ]);

      setGuesses((prevGuesses) => prevGuesses - 1);
    }
  }

  function clearLetterStates() {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if (guesses <= 0) {
      // reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // restarts the game
  function retry() {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      { gameStage === 'start' &&
        <StartScreen
          startGame={startGame}
        /> }

      { gameStage === 'game' &&
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        /> }

      { gameStage === 'end' &&
        <GameOver
          retry={retry}
        /> }
    </div>
  )
}

export default App
