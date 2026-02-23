import { getAllCharacters } from "@/services/characters.api";
import { keepPreviousData, queryOptions } from "@tanstack/react-query";


export function getAllCharactersQueryOptions({ pageIndex, pageSize }: { pageIndex: number, pageSize: number }) {
    return queryOptions({
        queryFn: () => getAllCharacters({ page: pageIndex, limit: pageSize }),
        queryKey: ['characters', pageIndex, pageSize],
        retry: false,
        placeholderData: keepPreviousData,
    })
}