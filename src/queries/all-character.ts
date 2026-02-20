import { getAllCharacters } from "@/services/characters.api";
import { queryOptions } from "@tanstack/react-query";


export function getAllCharactersQueryOptions() {
    return queryOptions({
        queryFn: getAllCharacters,
        queryKey: ['characters'],
        retry: false,
    })
}