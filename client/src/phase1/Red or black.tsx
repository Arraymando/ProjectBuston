export const RedorBlack = (props: any) => {
  const { payload } = props;
  const {
    // to do: onnodige prop-attributes verwijderen
    getRandomCard,
    cardDeck,
    randomCard,
    redOrBlackCorrect,
    setCorrectCounter,
    correctCounter,
    playerHand,
    setPlayerHand,
    correct,
    setCorrect,
  } = payload;

  const updateHand = () => {
    setPlayerHand({
      ...playerHand,
      cards: [...playerHand.cards, { randomCard.number, randomCard.sort }],
    });
    console.log(playerHand);
  };
  type color = string;
  console.log("testpunt 1");

  const redOrBlackChecker = (color: "red" | "black") => {
    console.log("testpunt 2");
    if (
      color === "red" &&
      (randomCard.sort === "hearts" || randomCard.sort === "diamonds")
    ) {
      updateHand();
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      updateHand();
      setCorrect(<div>That is incorrect!</div>);
    }
    if (
      color === "black" &&
      (randomCard.sort === "clubs" || randomCard.sort === "spades")
    ) {
      updateHand();
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      updateHand();
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
      {/* <div>{correct}</div> */}
    </>
  );
};
