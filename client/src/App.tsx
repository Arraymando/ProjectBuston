import React, { Component } from "react";
import "./App.css";
import { Card, getCards } from "./getCards";
import { useState, useEffect } from "react";
import { Gamestate } from "./phase1/Gamestate";
import axios from "axios";
import { JsxAttribute } from "typescript";

// import { Card } from "./Card";

function App() {
  const [cardDeck, setCardDeck] = useState<any>();
  const [randomCard, setRandomCard] = useState<{}>(0);
  const [gameState, setGameState] = useState<number>(1);
  const [redOrBlackCorrect, setRedOrBlackCorrect] = useState<boolean>(false);
  const [correctCounter, setCorrectCounter] = useState<number>(0);
  const [playerHand, setPlayerHand] = useState<{ cards: Card[] | [] }>({
    cards: [],
  });
  const [correct, setCorrect] = useState<any>();
  // Comment to commit

  useEffect(() => {
    const getDB = async () => {
      console.log("GELUKT");
      var cardDataBase = await axios.get("http://localhost:4000/");
      setCardDeck(cardDataBase.data.cards);
      console.log(cardDataBase.data.cards);
    };
    getDB();
  }, []);
  const getRandomCard = () => {
    if (!cardDeck || !cardDeck.length) return;
    const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    const result = cardDeck.filter((card: Card) => card.id !== randomCard.id);
    setCardDeck(result);
    setRandomCard(randomCard);
    console.log(cardDeck);
    return randomCard;
  };

  useEffect(() => {
    getRandomCard();
  }, []);

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
  };
  // console.log(passOn.randomCard.sort)
  return (
    <div className="App">
      <header className="App-header">
        <script>console.log("test")</script>
        {/* <p>There are {cardDeck.length} cards left in the deck.</p> */}
        <div>
          <Gamestate payload={payload} />
        </div>
      </header>
    </div>
  );
}

export default App;
