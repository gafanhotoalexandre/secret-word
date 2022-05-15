import './Game.css';

export function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>

      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>

      <div className="wordContainer">
        { letters.map((letter, index) => (
          guessedLetters.includes(letter) ? (
            <span key={index} className="letter">{letter}</span>
          ) : (
            <span key={index} className="blackSquare"></span>
          )
        )) }
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
          />

          <button
            type="button"
            onClick={verifyLetter}
          >
            Jogar
          </button>
        </form>
      </div>

      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        { wrongLetters.map((letter, index) => (
          <span ket={index}>{letter}, </span>
        )) }
      </div>
    </div>
  );
}
