import { CardContainer, FlippedCard } from '../style';

const Card = ({ card, onClick }) => {
    if (card.isFlipped) {
        return (
            <FlippedCard onClick={() => onClick(card)}>
                {card.value}
            </FlippedCard>
        );
    }
    return <CardContainer onClick={() => onClick(card)}>?</CardContainer>;
};

export default Card;
