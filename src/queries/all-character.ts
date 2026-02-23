import { getAllCharacters } from "@/services/characters.api";
import { queryOptions } from "@tanstack/react-query";


export function getAllCharactersQueryOptions({ pageIndex, pageSize }: { pageIndex: number, pageSize: number }) {
    return queryOptions({
        queryFn: () => getAllCharacters({ page: pageIndex + 1, limit: pageSize }),
        queryKey: ['characters', pageIndex, pageSize],
        retry: false,
    })
}