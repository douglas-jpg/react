import { BoardContainer } from '../style';
import Card from './Card';

const Board = ({ cards, onCardClick }) => {
    return (
        <BoardContainer>
            {cards.map((card) => (
                <Card key={card.index} card={card} onClick={onCardClick} />
            ))}
        </BoardContainer>
    );
};

export default Board;
