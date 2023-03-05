import logo from "./logo.svg";
import "./App.css";
import { Card, getCards } from "./getCards";
import { useState, useEffect } from "react";
import { Phase1 } from "./phase1/Phase1";
// import { Card } from "./Card";

function App() {
  const [cardDeck, setCardDeck] = useState<any>(getCards);
  const [randomCard, setRandomCard] = useState<any>(0);
  const [gameState, setGameState] = useState<any>("begin");
  const [redOrBlackCorrect, setRedOrBlackCorrect] = useState<boolean>(false);
  const [correctCounter, setCorrectCounter] = useState<number>(0);
  const [playerHand, setPlayerHand] = useState<{ cards: Card[] | [] }>({
    cards: [],
  });

  const getRandomCard = (cardDeck: Card[]) => {
    const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    const result = cardDeck.filter((card: Card) => card.id !== randomCard.id);
    setCardDeck(result);
    setRandomCard(randomCard);
    console.log(cardDeck);
    return randomCard;
  };
  // console.log(randomCard.sort)
  useEffect(() => {
    getRandomCard(cardDeck);
  }, []);
  useEffect(() => {}, [gameState]);
  // console.log(randomCard.sort)
  const passOn: object = {
    cardDeck,
    setCardDeck,
    randomCard,
    getRandomCard,
    redOrBlackCorrect,
    setRedOrBlackCorrect,
    correctCounter,
    setCorrectCounter,
    gameState,
    setGameState,
    playerHand,
    setPlayerHand,
  };
  // console.log(passOn.randomCard.sort)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>There are {cardDeck.length} cards left in the deck.</p>
        <div></div>
      </header>
    </div>
  );
}

export default App;
