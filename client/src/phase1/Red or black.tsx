export const RedorBlack = (props: any) => {
  const { payload } = props;
  const {
    getRandomCard,
    cardDeck,
    randomCard,
    redOrBlackCorrect,
    setCorrectCounter,
    correctCounter,
    playerHand,
    setPlayerHand,
  } = payload;

  const updateHand = () => {
    setPlayerHand({
      ...playerHand,
      cards: [...playerHand.cards, { randomCard }],
    });
    console.log(playerHand);
  };
  type color = string;
  // console.log(cardDeck)

  const redOrBlackChecker = (color: "red" | "black") => {
    // color.indexOf("Marcos") !== -1;
    getRandomCard(cardDeck);
    console.log("next card is", randomCard.sort);
    if (randomCard.sort === "hearts" || randomCard.sort === "diamonds") {
      setCorrectCounter(correctCounter + 1);
      updateHand();
    }
    updateHand();
  };

  const Redorblackgame = () => {
    return (
      <>
        <div>
          is the next card{" "}
          <button onClick={() => redOrBlackChecker("red")}>Red</button> of{" "}
          <button onClick={() => redOrBlackChecker("black")}>black</button>?
        </div>
      </>
    );
  };

  const black = () => {
    getRandomCard(cardDeck);
    if (randomCard.sort === "clubs" || randomCard.sort === "spades") {
      setCorrectCounter(correctCounter + 1);
      updateHand();
    }
    updateHand();
  };

  return (
    <>
      <div>
        <Redorblackgame />
        {/* <button onClick={() => redOrBlackChecker("red")}>Red</button> or{" "} */}
        {/* <button onClick={() => redOrBlackChecker("black")}>Black</button>? */}
      </div>
      {/* <div>you now have {playerHand.cards} in your hand</div> */}
    </>
  );
};
