import { useEffect, useState } from "react";
import { Card, } from "../getCards";
export const RedorBlack = (props: any) => {
  const { payload } = props;
  const {
    randomCard,
    playerHand,
    correct,
    setCorrect,
    setGameState,
    setCardDeck,
    setRandomCard,
    setPlayerHand,
    cardDeck
  } = payload
  const [newRandom, setNewRandom] = useState<boolean>(false)
  const [color, setColor] = useState<"red" | "black" | null>(null)
  const onClickEvent = (color: "red" | "black", cardDeck: Card[], playerHand: { cards: Card[] | [] }) => {
    console.log("37 CARDDECK", cardDeck);
    if (!cardDeck || !cardDeck.length) return;
    const randomCard: Card = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    console.log("40 randomCard", randomCard);
    const result = cardDeck.filter((card: Card) => card.id !== randomCard.id);
    setCardDeck(result);
    setRandomCard(randomCard);
      setPlayerHand({
        cards: [...playerHand.cards, randomCard],
     
    })
    setColor(color)
    setNewRandom(true)
  };

  useEffect(() => {
    if (!newRandom) return
    if (
      color === "red" &&
      (playerHand.cards[0].sort === "hearts" ||
        playerHand.cards[0].sort === "diamonds")
    ) {

      console.log("CORRCECR")
      setCorrect(<div>That is correct!</div>);
      return;
    } 
    else if (
      color === "black" &&
      (playerHand.cards[0].sort === "clubs" ||
        playerHand.cards[0].sort === "spades")
    ) {
      console.log("CORRCECR")
      setCorrect(<div>That is correct!</div>);
      return;
    } else {
      console.log("INCORRECT")
      setCorrect(<div>That is incorrect!</div>);
    }
    console.log("END")
  }, [newRandom]);
  // const redOrBlackChecker = () => {       
   
  // };
  return (
    <>
      <div>
        is the next card{" "}
        <button onClick={() =>  
    onClickEvent("red", cardDeck, playerHand)}>Red</button> of{" "}
        <button onClick={() => 
          onClickEvent("black", cardDeck, playerHand)}>black</button>?
      </div>
      <div> 
        {correct}
        <button onClick={() => setGameState(12)}>
          {" "}
          Click here after playing Red or black
        </button>
      </div>
    </>
  );
};


// function CorrectComponent() {
//   return correct;
// }