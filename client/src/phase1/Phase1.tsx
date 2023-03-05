import { Gotthecard } from "./Gotit";
import { InsideOutside } from "./Inside outisde";
import { HigherLower } from "./HigherLower";
import { RedorBlack } from "./Red or black";

export function Phase1(props: { passOn: any }) {
  const { passOn } = props;
  const { gameState } = passOn;
  switch (gameState) {
    case "begin":
      return (
        <div>
          <RedorBlack passOn={passOn} />
        </div>
      );
    case "redorblack":
      return (
        <div>
          <HigherLower passOn={passOn} />
        </div>
      );
    case "insideoutside":
      return (
        <div>
          <InsideOutside passOn={passOn} />
        </div>
      );
    case "gottheCard":
      return (
        <div>
          <Gotthecard passOn={passOn} />
        </div>
      );
    default:
      return (
        <div>
          <RedorBlack passOn={passOn} />
        </div>
      );
  }
}
