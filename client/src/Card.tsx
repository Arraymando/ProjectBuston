import { Card as CardType } from "./getCards"

export const Card = (props: {randomCardTest: CardType}) => {
    const { randomCardTest } = props
    let icon = null
    switch (randomCardTest.sort){
        case "hearts":
            icon = "❤"
            break
        case "diamonds":
            icon = "♦️"
            break
        case "clubs":
            icon = "♣️"
            break
        case "spades":
            icon = "♠️"
            break;
        default:
            break;
            
    }

    return <><h1>{randomCardTest.number}</h1><h2>{icon}</h2></>
}