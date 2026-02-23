import { CharactersTable, DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "@/components/table/characters-table"
import { useFilters } from "@/hooks/useFilters"
import { getAllCharactersQueryOptions } from "@/queries/all-character"
import { useSuspenseQuery } from "@tanstack/react-query"
import { PaginationState, Updater } from "@tanstack/react-table"

export function AllCharactersPage() {
    const { filters, setFilters } = useFilters("/characters/")
    const data = useSuspenseQuery(getAllCharactersQueryOptions({
        pageIndex: filters.pageIndex ?? DEFAULT_PAGE_INDEX,
        pageSize: filters.pageSize ?? DEFAULT_PAGE_SIZE
    }))

    console.log("data", data)

    const { totalPages } = data.data.meta
    const allCharacters = data.data.items

    const paginationState = {
        pageIndex: filters.pageIndex ?? DEFAULT_PAGE_INDEX,
        pageSize: filters.pageSize ?? DEFAULT_PAGE_SIZE,
    };

    const onPaginationChange = (pagination: Updater<PaginationState>) => {
        setFilters(
            typeof pagination === 'function'
                ? pagination(paginationState)
                : pagination,
        )
    }

    return (
        <>
            <h1>Characters</h1>
            <CharactersTable
                items={allCharacters}
                pagination={paginationState}
                totalPages={totalPages}
                onPaginationChange={onPaginationChange}
            />

        </>
    )
}