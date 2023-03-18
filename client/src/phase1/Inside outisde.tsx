export const InsideOutside = (props: any) => {
  const { payload } = props;
  const {
    randomCard,
    getRandomCard,
    correct,
    setCorrect,
    setGameState,
    playerHand,
    updateHand,
  } = payload;

  function CorrectComponent() {
    return correct;
  }
  const InOutChecker = (argument: "in" | "out") => {
    getRandomCard();
    updateHand(randomCard);
    console.log("Getting there");
    console.log(playerHand.cards);
    if (
      argument === "in" &&
      (playerHand.cards.at(-3).number <
        playerHand.cards.at(-1).number <
        playerHand.cards.at(-2).number ||
        playerHand.cards.at(-2).number <
          playerHand.cards.at(-1).number <
          playerHand.cards.at(-3).number)
    ) {
      console.log("Checkpoint 1");
      setCorrect(<div>You are right!</div>);
    } else if (
      argument === "out" &&
      ((playerHand.cards.at(-3).number < playerHand.cards.at(-1).number &&
        playerHand.cards.at(-2).number < playerHand.cards.at(-1).number) ||
        (playerHand.cards.at(-3).number > playerHand.cards.at(-1).number &&
          playerHand.cards.at(-2).number > playerHand.cards.at(-1).number))
    ) {
      console.log("Checkpoint 2");
      setCorrect(<div> You are right! </div>);
    } else {
      console.log("Checkpoint 3");
      setCorrect(<div>Wrong!</div>);
    }
  };

  return (
    <div>
      <div>Is the next card</div>
      <button onClick={() => InOutChecker("in")}>inside</button>
      <div>or</div>
      <button onClick={() => InOutChecker("out")}>outside</button>
      <CorrectComponent />

      <button onClick={() => setGameState(14)}>
        {" "}
        Click here after playing inside or outside
      </button>
    </div>
  );
};
