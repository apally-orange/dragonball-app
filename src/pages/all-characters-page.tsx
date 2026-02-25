import { CharactersTable } from "@/components/table/characters-table"
import { useFilters } from "@/hooks/useFilters"
import { getAllCharactersQueryOptions } from "@/queries/all-character"
import { useSuspenseQuery } from "@tanstack/react-query"
import { PaginationState, Updater } from "@tanstack/react-table"

export function AllCharactersPage() {
    const { filters, setFilters } = useFilters("/characters/")

    const data = useSuspenseQuery(getAllCharactersQueryOptions({ filters: filters, }))

    const { totalPages } = data.data.meta
    const allCharacters = data.data.items

    const onPaginationChange = (pagination: Updater<PaginationState>) => {
        setFilters(
            typeof pagination === 'function'
                ? pagination(filters)
                : pagination,
        )
    }

    return (
        <>
            <h1>Characters</h1>
            <CharactersTable
                items={allCharacters}
                pagination={filters}
                totalPages={totalPages}
                filters={filters}
                onPaginationChange={onPaginationChange}
                onFilterChange={(filters) => setFilters(filters)
                }
            />
        </>
    )
}