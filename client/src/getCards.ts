export type Card = {number: number, sort: Suite, id?: number}
// type ObjectType = {number: number, id: number, animal: "cow" | "pig"}
type Suite = "hearts" | "diamonds" | "clubs" | "spades"


const createCard = (number: number, sort: Suite): Card => {
    return {number: number, sort: sort}
}
    
export const getCards = (): Card[] => {
    let cards: Card[] = []
    for (let step = 2; step < 15; step++) {
       cards = [...cards, 
       createCard(step, "hearts"),
       createCard(step, "diamonds"),
       createCard(step, "clubs"),
       createCard(step, "spades")]
      }
    
    return cards.map((card, index) => {
        return {...card, id: index}
    })
}

