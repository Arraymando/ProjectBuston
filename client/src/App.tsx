import "./App.css";

import { Card, getCards } from "./getCards";
import { useEffect, useState } from "react";

import { Card as DisplayCard } from "./Card";
import { Gamestate } from "./phase1/Gamestate";
import { JsxAttribute } from "typescript";
import axios from "axios";

function App() {
  const [cardDeck, setCardDeck] = useState<Card[] | null>(null);
  const [randomCard, setRandomCard] = useState<Card | null>(null);
  const [gameState, setGameState] = useState<number>(0);
  const [redOrBlackCorrect, setRedOrBlackCorrect] = useState<boolean>(false);
  const [correctCounter, setCorrectCounter] = useState<number>(0);
  const [playerHand, setPlayerHand] = useState<{ cards: Card[] | [] }>({
    cards: [],
  });
  const [correct, setCorrect] = useState<JsxAttribute>();

  useEffect(() => {
    const getDB = async () => {
      var cardDataBase = await axios.get("http://localhost:4000/");
      setCardDeck(cardDataBase.data.cards);
      console.log(cardDataBase.data.cards);
    };
    getDB();
  }, []);
  //comment
  useEffect(() => {
    console.log(playerHand.cards);
    
  }, [playerHand]);

  useEffect(() => {
    console.log(randomCard);
    
  }, [randomCard]);

  const getRandomCard = () => {
    console.log("37 CARDDECK", cardDeck);
    if (!cardDeck || !cardDeck.length) return;
    const randomCard: Card = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    console.log("40 randomCard", randomCard);
    const result = cardDeck.filter((card: Card) => card.id !== randomCard.id);
    setCardDeck(result);
    setRandomCard(randomCard);
    const updateHand = (randomCard: any) => {
      setPlayerHand({
        cards: [...playerHand.cards, randomCard],
      });
    };

    updateHand(randomCard)
    
  };
  

  // useEffect(() => {
  //   const firstdraft = async () => {
  //     getRandomCard();
  //     console.log("RC", randomCard)
  //     updateHand(randomCard);
  //   };
  //   firstdraft();
  // }, []);
  // useEffect(() => {
  //   console.log("randomCard CHANGE", randomCard)
  //  }, [randomCard]);
  // useEffect(() => {
  //  console.log("CORRECT CHANGE")
  // }, [correct]);
  

  const payload = {
    cardDeck,
    setCardDeck,
    randomCard,
    redOrBlackCorrect,
    setRedOrBlackCorrect,
    correctCounter,
    setCorrectCounter,
    gameState,
    setGameState,
    playerHand,
    setPlayerHand,
    correct,
    setCorrect,
    setRandomCard
  };
  // console.log(passOn.randomCard.sort)
  return (
    <div className="App">
      <header className="App-header">
        <Gamestate payload={payload} />
        <DisplayCard payload={payload} />
      </header>
    </div>
  );
}

export default App;
