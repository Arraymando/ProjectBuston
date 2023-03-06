const express = require("express");
const corsMiddleWare = require("cors");
const PORT = 4000;
const app = express();

const createCard = (number: number, sort: string) => {
  return { number: number, sort: sort };
};

const getCards = () => {
  let cards: any[] = [];
  for (let step = 2; step < 15; step++) {
    cards = [
      ...cards,
      createCard(step, "hearts"),
      createCard(step, "diamonds"),
      createCard(step, "clubs"),
      createCard(step, "spades"),
    ];
  }

  return cards.map((card, index) => {
    return { ...card, id: index };
  });
};

app.use(corsMiddleWare());
app.use(express.json());

app.get("/", async (req: any, res: any, next: any) => {
  try {
    console.log("GELUKT");
    return res
      .status(200)
      .send({ cards: getCards(), message: "Succesfully received all cards!" });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
