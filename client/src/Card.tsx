import { Card as CardType } from "./getCards";

export const Card = (props: any) => {
  const { payload } = props;
  const { playerHand } = payload;
  console.log("props", props)
  
  const currentCards = playerHand.cards.map((card: CardType) => {
    let icon = null;
  switch (card.sort) {
    case "hearts":
      icon = "❤";
      break;
    case "diamonds":
      icon = "♦️";
      break;
    case "clubs":
      icon = "♣️";
      break;
    case "spades":
      icon = "♠️";
      break;
    default:
      break;
  }
    return (
      <div key={card.id}>
        <h1>{card.number}</h1>
        <h2>{icon}</h2>
      </div>)
  })
  return (
    <>
      {currentCards}
    </>
  );
};
