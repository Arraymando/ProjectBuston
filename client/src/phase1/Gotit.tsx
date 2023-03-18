export const Gotthecard = (props: any) => {
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

  const gotThesuit = (argument: 1 | 0) => {
    getRandomCard();
    updateHand(randomCard);
    console.log("Getting there");
    console.log(playerHand.cards);
    if (
      (argument === 1 &&
        playerHand.cards.at(-2).sort.includes(playerHand.cards.at(-1).sort)) ||
      playerHand.cards.at(-3).sort.includes(playerHand.cards.at(-1).sort) ||
      playerHand.cards.at(-4).sort.includes(playerHand.cards.at(-1).sort)
    ) {
      console.log("Checkpoint 1");
      setCorrect(<div>You are right!</div>);
    } else if (
      argument === 0 &&
      !playerHand.cards.at(-2).sort.includes(playerHand.cards.at(-1).sort) &&
      !playerHand.cards.at(-3).sort.includes(playerHand.cards.at(-1).sort) &&
      !playerHand.cards.at(-4).sort.includes(playerHand.cards.at(-1).sort)
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
      <div>Do you have the suit?</div>
      <br />
      <button onClick={() => gotThesuit(1)}>Yes</button>
      <div>or</div>
      <button onClick={() => gotThesuit(0)}>No</button>
      <CorrectComponent />
      <button onClick={() => setGameState(15)}>
        {" "}
        Click here after playing Got the suit?
      </button>
    </div>
  );
};
