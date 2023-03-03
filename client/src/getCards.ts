export type Card = {number: number, sort: string, id?: number}

const createCard = (number: number, sort: string): Card => {
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

