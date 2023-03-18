export const HigherLower = (props: any) => {
  const { payload } = props;
  const {
    randomCard,
    getRandomCard,
    gameState,
    setGameState,
    playerHand,
    updateHand,
    correct,
    setCorrect,
  } = payload;

  function CorrectComponent() {
    return correct;
  }

  const higherLowerCheck = (argument: "higher" | "lower") => {
    getRandomCard();
    updateHand(randomCard);
    console.log("Getting there");
    console.log(playerHand.cards);
    if (
      argument === "higher" &&
      playerHand.cards.at(-2).number < playerHand.cards.at(-1).number
    ) {
      console.log("Checkpoint 1");
      setCorrect(<div>You are right!</div>);
    } else if (
      argument === "lower" &&
      playerHand.cards.at(-2).number > playerHand.cards.at(-1).number
    ) {
      console.log("Checkpoint 2");
      setCorrect(<div> You are right! </div>);
    } else {
      console.log("Checkpoint 3");
      setCorrect(<div>Wrong!</div>);
    }
  };
  const HigherLowerGame = () => {
    return (
      <div>
        Is the next card
        <button onClick={() => higherLowerCheck("higher")}>higher</button>
        or
        <button onClick={() => higherLowerCheck("lower")}>lower</button>?
        <CorrectComponent />
        <button onClick={() => setGameState(13)}>
          {" "}
          Click here after playing higher or lower
        </button>
      </div>
    );
  };

  return (
    <div>
      <div>Gamestate has changed to {gameState}</div>
      <HigherLowerGame />
    </div>
  );
};
