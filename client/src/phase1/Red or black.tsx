export const RedorBlack = (props: any) => {
  const { payload } = props;
  const {
    // to do: onnodige prop-attributes verwijderen
    getRandomCard,
    randomCard,
    playerHand,
    setPlayerHand,
    correct,
    setCorrect,
    setGameState,
  } = payload;

  const updateHand = (randomCard: any) => {
    setPlayerHand({
      ...playerHand,
      cards: [...playerHand.cards, { randomCard }],
    });
    console.log(playerHand.cards);
  };
  type color = string;
  console.log("testpunt 1");
  function CorrectComponent() {
    return correct;
  }
  function PlayerHandComponent() {
    return <div>{playerHand.cards.id}</div>;
  }
  const redOrBlackChecker = (color: "red" | "black") => {
    if (randomCard === 0) {
      getRandomCard();
    }
    getRandomCard();
    console.log("testpunt 2");
    if (
      color === "red" &&
      (randomCard.sort === "hearts" || randomCard.sort === "diamonds")
    ) {
      updateHand(randomCard);
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      updateHand(randomCard);
      setCorrect(<div>That is incorrect!</div>);
    }
    if (
      color === "black" &&
      (randomCard.sort === "clubs" || randomCard.sort === "spades")
    ) {
      updateHand(randomCard);
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      updateHand(randomCard);
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
        <PlayerHandComponent />
        <button onClick={() => setGameState(2)}>
          {" "}
          Click here after playing Red or black
        </button>
      </div>
    </>
  );
};
