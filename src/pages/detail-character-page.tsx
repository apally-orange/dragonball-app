import { getCharacterQueryOptions } from "@/queries/charater"
import { useSuspenseQuery } from "@tanstack/react-query"


export function DetailCharactersPage({ characterId }: { characterId: string }) {
    const data = useSuspenseQuery(getCharacterQueryOptions(characterId))

    // if (!data) {
    //     return <div>Loading...</div>
    // }

    const character = data.data

    return (
        <>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} height={200} />
            <p>{character.description}</p>
        </>
    )
}