import './GameOver.css';

export function GameOver({ retry, score }) {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>
        A sua pontuação foi de: <span>{score}</span>
      </h2>

      <button
        type="button"
        onClick={retry}
      >
        Jogar Novamente
      </button>
    </div>
  );
}
