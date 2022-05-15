import './Game.css';

export function Game({ verifyLetter }) {
  return (
    <div>
      <h1>Game</h1>
      <button
        type="button"
        onClick={verifyLetter}
      >
        Finalizar o Jogo
      </button>
    </div>
  );
}
