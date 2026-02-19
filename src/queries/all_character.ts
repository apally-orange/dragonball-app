import { getAllCharaters } from "@/services/characters.api";
import { queryOptions } from "@tanstack/react-query";


export function getAllCharactersQueryOptions() {
    return queryOptions({
        queryFn: getAllCharaters,
        queryKey: ['characters'],
        retry: false,
    })
}