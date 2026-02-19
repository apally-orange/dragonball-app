import { CharactersList } from "@/components/characters_list"
import { getAllCharactersQueryOptions } from "@/queries/all_character"
import { useSuspenseQuery } from "@tanstack/react-query"


export function CharactersPage() {
    const data = useSuspenseQuery(getAllCharactersQueryOptions())

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h1>Characters</h1>
            <CharactersList items={data.data.items} />
        </>
    )
}