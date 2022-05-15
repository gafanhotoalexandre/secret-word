import './StartScreen.css';

export function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar.</p>
      <button
        type="button"
        onClick={startGame}
      >Iniciar o Jogo</button>
    </div>
  );
}
