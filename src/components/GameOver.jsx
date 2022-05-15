import './GameOver.css';

export function GameOver({ retry }) {
  return (
    <div>
      <h1>Game Over</h1>
      <button
        type="button"
        onClick={retry}
      >
        Jogar Novamente
      </button>
    </div>
  );
}
