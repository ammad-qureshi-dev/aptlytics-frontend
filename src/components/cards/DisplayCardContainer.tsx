import DisplayCard from "./DisplayCard";
import { PageCardType } from "./Types";

interface DisplayCardContainerProp {
    cards: PageCardType[];
}

export default function DisplayCardContainer({ cards }: DisplayCardContainerProp) {
    return (
        <div
            id="display-card-container"
            className={`
        w-full
        flex flex-col md:flex-row sm:flex-row
        flex-wrap md:flex-nowrap sm:flex-nowrap
        gap-6
        items-stretch
        justify-start
        transition-all duration-200 ease-in-out
        py-4
        hover:cursor-pointer
      `}
        >
            {cards.map((card, index) => (
                <DisplayCard card={card} key={index} />
            ))}
        </div>
    );
}
