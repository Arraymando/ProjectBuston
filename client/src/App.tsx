import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, getCards } from "./getCards";
import { useState, useEffect } from "react";
import { Gamestate } from "./phase1/Gamestate";
import axios from "axios";

// import { Card } from "./Card";

function App() {
  const [cardDeck, setCardDeck] = useState<any>();
  const [randomCard, setRandomCard] = useState<any>(0);
  const [gameState, setGameState] = useState<number>(1);
  const [redOrBlackCorrect, setRedOrBlackCorrect] = useState<boolean>(false);
  const [correctCounter, setCorrectCounter] = useState<number>(0);
  const [playerHand, setPlayerHand] = useState<{ cards: Card[] | [] }>({
    cards: [],
  });

  useEffect(() => {
    const getDB = async () => {
      console.log("GELUKT");
      var cardDataBase = await axios.get("http://192.168.0.118:4000/");
      return cardDataBase;
    };
    getDB();
  }, []);

  const getRandomCard = () => {
    const randomCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    const result = cardDeck.filter((card: Card) => card.id !== randomCard.id);
    setCardDeck(result);
    setRandomCard(randomCard);
    console.log(cardDeck);
    return randomCard;
  };
  // console.log(randomCard.sort)
  useEffect(() => {
    getRandomCard();
  }, []);
  useEffect(() => {}, [gameState]);
  // console.log(randomCard.sort)
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
  };
  // console.log(passOn.randomCard.sort)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>There are {cardDeck.length} cards left in the deck.</p>
        <div>
          <Gamestate payload={payload} />
        </div>
      </header>
    </div>
  );
}

export default App;