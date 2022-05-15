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

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

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

    console.log(pickedWord, pickedCategory, letters);

    setGameStage(stages[1].name);
  }

  // process the letter input
  function verifyLetter() {
    setGameStage(stages[2].name);
  }

  // restarts the game
  function retry() {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      { gameStage === 'start' && <StartScreen startGame={startGame} /> }
      { gameStage === 'game' && <Game verifyLetter={verifyLetter} /> }
      { gameStage === 'end' && <GameOver retry={retry} /> }
    </div>
  )
}

export default App
