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
    case 11:
      return (
        <div>
          <RedorBlack payload={payload} />
        </div>
      );
    case 12:
      return (
        <div>
          <p>gamestate is now {gameState}</p>
          <HigherLower payload={payload} />
        </div>
      );
    case 13:
      return (
        <div>
          <InsideOutside payload={payload} />
        </div>
      );
    case 14:
      return (
        <div>
          <Gotthecard payload={payload} />
        </div>
      );
    // case 15:
    //   return (
    //     <div>
    //       <Phase2 payload={payload} />
    //     </div>
    //   );
    default:
      return (
        <div>
          <RedorBlack payload={payload} />
        </div>
      );
  }
}
