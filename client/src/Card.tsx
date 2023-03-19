import { Card as CardType } from "./getCards";

export const Card = (props: any) => {
  const { payload } = props;
  const { playerHand } = payload;
  let icon = null;
  switch (playerHand.cards.sort) {
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
    <>
      <h1>{playerHand.cards.number}</h1>
      <h2>{icon}</h2>
    </>
  );
};
