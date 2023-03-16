import { Gotthecard } from "./Gotit";
import { InsideOutside } from "./Inside outisde";
import { HigherLower } from "./HigherLower";
import { RedorBlack } from "./Red or black";
import { ButtonToStart } from "./ButtontoStart";

export function Gamestate(props: { payload: any }) {
  const { payload } = props;
  const { gameState } = payload;
  switch (gameState) {
    case 0:
      return (
        <div>
          <ButtonToStart payload={payload} />
        </div>
      );
    case 1:
      return (
        <div>
          <RedorBlack payload={payload} />
        </div>
      );
    case 2:
      return (
        <div>
          <p>gamestate is now {gameState}</p>
          <HigherLower payload={payload} />
        </div>
      );
    case 3:
      return (
        <div>
          <InsideOutside payload={payload} />
        </div>
      );
    case 4:
      return (
        <div>
          <Gotthecard payload={payload} />
        </div>
      );
    default:
      return (
        <div>
          <RedorBlack payload={payload} />
        </div>
      );
  }
}
