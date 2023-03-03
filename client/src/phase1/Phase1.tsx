import { GotTheCard } from './Gotit';
import { HigherLower } from './HigherLower';
import { RedorBlack } from './Red or black';

export function Phase1(props: {passOn: any, gameState: any}) {
    const { passOn } = props;
    const { gameState } = passOn;
    switch (gameState) {
        case 'begin':
            return (
                <div>
                    <RedorBlack passOn={passOn} />
                </div>
            );
        // case 'redorblack':
        //     return <HigherLower passOn />;
        // case 'insideoutside':
        //     return <insideOutside passOn />;
        // case 'gottheCard':
        //     return <GotTheCard passOn />;
        default:
            return (
                <div>
                    <RedorBlack passOn={passOn} />
                </div>
            );
    }
}
