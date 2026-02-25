import { getAllCharacters, searchCharacters } from "@/services/characters.api";
import { PaginationParams } from "@/services/table.type";
import { keepPreviousData, queryOptions } from "@tanstack/react-query";


export function getAllCharactersQueryOptions(
    { filters }: { filters: Partial<Character & PaginationParams> }) {

    return queryOptions({
        queryFn: () => {
            const { pageIndex, pageSize, name, gender, race, affiliation } = filters;
            const searchFilters: Record<string, unknown> = { name, gender, race, affiliation }
            const hasFilter = Object.values(searchFilters).some(
                (v) => v !== undefined && v !== null && String(v).trim() !== ''
            )

            if (hasFilter) {
                return searchCharacters(filters)
            }

            return getAllCharacters({ pageIndex: pageIndex, pageSize: pageSize, })
        },
        queryKey: ['characters', filters],
        retry: false,
        placeholderData: keepPreviousData,
    })
}