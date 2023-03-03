export const RedorBlack = (props: any) => {
    const { passOn } = props;
    const {
        getRandomCard,
        cardDeck,
        randomCard,
        redOrBlackCorrect,
        setCorrectCounter,
        correctCounter,
        playerHand,
        setPlayerHand,
    } = passOn;
    const updateHand = () => {
        setPlayerHand({
            ...playerHand,
            cards: [...playerHand.cards, {randomCard}]
        });
        console.log(playerHand);
    };

    // console.log(cardDeck)
    const red = () => {
        getRandomCard(cardDeck);
        console.log('next card is', randomCard.sort);
        if (randomCard.sort === 'hearts' || randomCard.sort === 'diamonds') {
            setCorrectCounter(correctCounter + 1);
            updateHand();
        }
        updateHand();
    };
    const black = () => {
        getRandomCard(cardDeck);
        if (randomCard.sort === 'clubs' || randomCard.sort === 'spades') {
            setCorrectCounter(correctCounter + 1);
            updateHand();
        }
        updateHand();
    };

    return (
        <>
            <div>
                Is the next card <button onClick={() => red()}>Red</button> or{' '}
                <button onClick={() => black()}>Black</button>?
            </div>
            <div>{redOrBlackCorrect}</div>
        </>
    );
};
