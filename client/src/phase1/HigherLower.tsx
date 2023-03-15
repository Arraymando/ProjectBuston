export const HigherLower = (props: any) => {
  const { payload } = props;
  const {
    cardDeck,
    setCardDeck,
    randomCard,
    getRandomCard,
    redOrBlackCorrect,
    setRedOrBlackCorrect,
    correctCounter,
    setCorrectCounter,
    gameState,
    setGameState,
    playerHand,
    updateHand,
  } = payload;

  const higherlowerCheck = (argument: "higher" | "lower") => {
    getRandomCard();
    updateHand();
    console.log("Getting there");
    console.log(playerHand.cards);
    if (
      argument === "higher" &&
      playerHand.cards[-2].number < playerHand.cards[-1].number
    ) {
      return <div>You are right!</div>;
    }
    if (
      argument === "lower" &&
      playerHand.cards[-2].number > playerHand.cards[-1].number
    ) {
      return <div> You are right! </div>;
    }
  };
  const HigherLowerGame = () => {
    return (
      <div>
        Is the next card
        <button onClick={() => higherlowerCheck("higher")}>higher</button>
        or
        <button onClick={() => higherlowerCheck("lower")}>lower</button>?
      </div>
    );
  };

  return (
    <div>
      <div>Gamestate has changed to {gameState}</div>
      <HigherLowerGame />
      <button onClick={() => setGameState(3)}>
        {" "}
        Click here after playing higher or lower
      </button>
    </div>
  );
};
