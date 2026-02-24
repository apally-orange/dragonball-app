import { getCharacterQueryOptions } from "@/queries/charater"
import { useSuspenseQuery } from "@tanstack/react-query"
import './detail-character-page.scss'


export function DetailCharactersPage({ characterId }: { characterId: string }) {
    const data = useSuspenseQuery(getCharacterQueryOptions(characterId))

    const character = data.data

    return (
        <div className="detail-character">
            <h1>{character.name}</h1>
            <div className="detail-character__body">
                <div className="detail-character__body__image">
                    <img src={character.image} alt={character.name} />
                </div>
                <p>{character.description}</p>
            </div>
        </div>
    )
}