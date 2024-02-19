import Board from './Board';
import { GameContainer, Button } from '../style';
import { useState } from 'react';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const generateCards = () => {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = values.map((value) => ({
        value,
        isFlipped: false,
    }));

    const duplicatedCards = cards
        .concat([...cards])
        .map((card, index) => ({ ...card, index }));

    return shuffleArray(duplicatedCards);
};

const Game = () => {
    const playerChances = 8;
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [chances, setChances] = useState(playerChances);

    const result = cards.filter((card) => card.isFlipped).length;

    const handleCardClick = (clickedCard) => {
        if (chances === 0) return;

        if (flippedCards.length === 2) return;

        const newCard = cards.map((card) => {
            return card.index === clickedCard.index
                ? { ...card, isFlipped: true }
                : card;
        });

        setCards(newCard);

        setFlippedCards([...flippedCards, clickedCard]);
        if (flippedCards.length === 1) {
            setTimeout(() => {
                const [firstCard] = flippedCards;
                if (firstCard.value !== clickedCard.value) {
                    const resetCards = cards.map((card) => {
                        return card.index === firstCard.index ||
                            card.index === clickedCard.index
                            ? { ...card, isFlipped: false }
                            : card;
                    });
                    setCards(resetCards);
                    setChances((prev) => prev - 1);
                }

                setFlippedCards([]);
            }, 600);
        }
    };

    const resetGame = () => {
        setChances(playerChances);
        setFlippedCards([]);
        setCards(generateCards());
    };

    return (
        <GameContainer>
            <Board cards={cards} onCardClick={handleCardClick} />
            {chances === 0 ? (
                <p>Suas chances acabaram</p>
            ) : result === cards.length ? (
                <h2>Parabens voce ganhou</h2>
            ) : (
                <p>Voce possui {chances} tentativas</p>
            )}
            <Button onClick={resetGame}>Reiniciar o Jogo</Button>
        </GameContainer>
    );
};

export default Game;
