export const Gotthecard = (props: any) => {
  const { payload } = props;
  const { getRandomCard, gameState, setGameState, playerHand, updateHand } =
    payload;

  const gotThesuit = (argument: 1 | 0) => {
    getRandomCard();
    updateHand();
    console.log("Getting there");
    console.log(playerHand.cards);
    if (
      (argument === 1 &&
        playerHand.cards
          .indexOf(-2)
          .sort.includes(playerHand.cards.indexOf(-1).sort)) ||
      playerHand.cards
        .indexOf(-3)
        .sort.includes(playerHand.cards.indexOf(-1).sort) ||
      playerHand.cards
        .indexOf(-4)
        .sort.includes(playerHand.cards.indexOf(-1).sort)
    ) {
      console.log("Checkpoint 1");
      return <div>You are right!</div>;
    } else if (
      argument === 0 &&
      !playerHand.cards
        .indexOf(-2)
        .sort.includes(playerHand.cards.indexOf(-1).sort) &&
      !playerHand.cards
        .indexOf(-3)
        .sort.includes(playerHand.cards.indexOf(-1).sort) &&
      !playerHand.cards
        .indexOf(-4)
        .sort.includes(playerHand.cards.indexOf(-1).sort)
    ) {
      console.log("Checkpoint 2");
      return <div> You are right! </div>;
    } else {
      console.log("Checkpoint 3");
      return <div>Wrong!</div>;
    }
  };

  return (
    <div>
      <div>Do you have the suit?</div>
      <br />
      <button onClick={() => gotThesuit(1)}>Yes</button>
      <div>or</div>
      <button onClick={() => gotThesuit(0)}>No</button>
      <button onClick={() => setGameState(15)}>
        {" "}
        Click here after playing Got the suit?
      </button>
    </div>
  );
};
