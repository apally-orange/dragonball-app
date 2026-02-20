import { getCharacterById } from "@/services/characters.api";
import { queryOptions } from "@tanstack/react-query";



export function getCharacterQueryOptions(characterId: string) {
    return queryOptions({
        queryFn: () => getCharacterById(characterId),
        queryKey: ['character', characterId],
        retry: false,
    })
}