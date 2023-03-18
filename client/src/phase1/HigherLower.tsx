export const HigherLower = (props: any) => {
  const { payload } = props;
  const { getRandomCard, gameState, setGameState, playerHand, updateHand } =
    payload;

  const higherlowerCheck = (argument: "higher" | "lower") => {
    getRandomCard();
    updateHand();
    console.log("Getting there");
    console.log(playerHand.cards);
    if (
      argument === "higher" &&
      playerHand.cards.indexOf(-2).number < playerHand.cards.indexOf(-1).number
    ) {
      console.log("Checkpoint 1");
      return <div>You are right!</div>;
    } else if (
      argument === "lower" &&
      playerHand.cards.indexOf(-2).number > playerHand.cards.indexOf(-1).number
    ) {
      console.log("Checkpoint 2");
      return <div> You are right! </div>;
    } else {
      console.log("Checkpoint 3");
      return <div>Wrong!</div>;
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
