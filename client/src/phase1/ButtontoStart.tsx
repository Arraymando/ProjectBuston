export const ButtonToStart = (props: any) => {
  const { payload } = props;
  const { setGameState, getRandomCard, updateHand, randomCard } = payload;
  return (
    <div>
      Click{" "}
      <button
        onClick={() => {
          setGameState(11);
          getRandomCard();
          updateHand(randomCard);
        }}
      >
        here
      </button>{" "}
      to start the game
    </div>
  );
};
