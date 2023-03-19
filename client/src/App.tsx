import "./App.css";
import { Card, getCards } from "./getCards";
import { useState, useEffect } from "react";
import { Gamestate } from "./phase1/Gamestate";
import axios from "axios";
import { JsxAttribute } from "typescript";
import { Card as DisplayCard } from "./Card";

function App() {
  const [cardDeck, setCardDeck] = useState<any>();
  const [randomCard, setRandomCard] = useState<{}>(0);
  const [gameState, setGameState] = useState<number>(0);
  const [redOrBlackCorrect, setRedOrBlackCorrect] = useState<boolean>(false);
  const [correctCounter, setCorrectCounter] = useState<number>(0);
  const [playerHand, setPlayerHand] = useState<{ cards: Card[] | [] }>({
    cards: [],
  });
  const [correct, setCorrect] = useState<JsxAttribute>();

  useEffect(() => {
    const getDB = async () => {
      console.log("GELUKT");
      var cardDataBase = await axios.get("http://localhost:4000/");
      setCardDeck(cardDataBase.data.cards);
      console.log(cardDataBase.data.cards);
    };
    getDB();
  }, []);

  useEffect(() => {
    console.log(playerHand.cards);
  }, [playerHand]);

  const getRandomCard = () => {
    if (!cardDeck || !cardDeck.length) return;
    const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    const result = cardDeck.filter((card: Card) => card.id !== randomCard.id);
    setCardDeck(result);
    setRandomCard(randomCard);
    console.log(cardDeck);
  };

  useEffect(() => {
    const firstdraft = async () => {
      getRandomCard();
      updateHand(randomCard);
    };
    firstdraft();
  }, []);

  const updateHand = (randomCard: any) => {
    setPlayerHand({
      cards: [...playerHand.cards, randomCard],
    });
  };

  const payload: object = {
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
    correct,
    setCorrect,
    updateHand,
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
