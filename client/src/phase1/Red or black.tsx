export const RedorBlack = (props: any) => {
  const { payload } = props;
  const {
    getRandomCard,
    randomCard,
    playerHand,
    correct,
    setCorrect,
    setGameState,
    updateHand,
  } = payload;

  type color = string;
  console.log("testpunt 1");
  function CorrectComponent() {
    return correct;
  }

  const redOrBlackChecker = (color: "red" | "black") => {
    getRandomCard();
    updateHand(randomCard);
    console.log("testpunt 2");
    if (
      color === "red" &&
      (playerHand.cards.at(-1).sort === "hearts" ||
        playerHand.cards.at(-1).sort === "diamonds")
    ) {
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      setCorrect(<div>That is incorrect!</div>);
    }
    if (
      color === "black" &&
      (playerHand.cards.at(-1).sort === "clubs" ||
        playerHand.cards.at(-1).sort === "spades")
    ) {
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      setCorrect(<div>That is incorrect!</div>);
    }
  };
  return (
    <>
      <div>
        is the next card{" "}
        <button onClick={() => redOrBlackChecker("red")}>Red</button> of{" "}
        <button onClick={() => redOrBlackChecker("black")}>black</button>?
      </div>
      <div>
        <CorrectComponent />
        <button onClick={() => setGameState(12)}>
          {" "}
          Click here after playing Red or black
        </button>
      </div>
    </>
  );
};
