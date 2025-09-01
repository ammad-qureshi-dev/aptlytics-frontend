import DisplayCard from "./DisplayCard"
import { PageCardType } from "./Types"

interface DisplayCardContainerProp {
    cards: PageCardType[]
}

export default function DisplayCardContainer({ cards }: DisplayCardContainerProp) {
    return (
        <div
            id="display-card-container"
            className={`w-full gap-2
    ${cards.length > 4
                    ? "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
                    : "flex flex-row "}`
            }
        >
            {cards.map((card, key) => (
                <DisplayCard card={card} key={key} />
            ))}
        </div>
    )
}