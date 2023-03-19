import { useEffect } from "react";

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

  function CorrectComponent() {
    return correct;
  }
  useEffect(() => {
    getRandomCard();
    updateHand(randomCard); 
  }, [])
  const redOrBlackChecker = (color: "red" | "black") => {
    if (
      color === "red" &&
      (playerHand.cards[2].sort === "hearts" ||
        playerHand.cards[2].sort === "diamonds")
    ) {

      console.log("CORRCECR")
      setCorrect(<div>That is correct!</div>);
      return;
    } 
    else if (
      color === "black" &&
      (playerHand.cards[2].sort === "clubs" ||
        playerHand.cards[2].sort === "spades")
    ) {
      console.log("CORRCECR")
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      console.log("INCORRECT")
      setCorrect(<div>That is incorrect!</div>);
    }
    console.log("END")
  };
  return (
    <>
      <div>
        is the next card{" "}
        <button onClick={() =>  
    redOrBlackChecker("red")}>Red</button> of{" "}
        <button onClick={() => 
          redOrBlackChecker("black")}>black</button>?
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
