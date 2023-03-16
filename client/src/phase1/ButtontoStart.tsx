export const ButtonToStart = (props: any) => {
  const { payload } = props;
  const { setGameState } = payload;
  return (
    <div>
      Click <button onClick={() => setGameState(1)}>here</button> to start the
      game
    </div>
  );
};
