import { CharactersTable } from "@/components/table/characters-table"
import { useFilters } from "@/hooks/useFilters"
import { getAllCharactersQueryOptions } from "@/queries/all-character"
import { useSuspenseQuery } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { PaginationState, Updater } from "@tanstack/react-table"
import "./all-characters-page.scss"

// TODO améliorer l'affichage 
export function AllCharactersPage() {
    const { filters, setFilters } = useFilters("/characters/")

    const { data } = useSuspenseQuery(getAllCharactersQueryOptions({ filters: filters, }))

    const { totalPages } = data.meta
    const allCharacters = data.items

    const onPaginationChange = (pagination: Updater<PaginationState>) => {
        setFilters(
            typeof pagination === 'function'
                ? pagination(filters)
                : pagination,
        )
    }

    return (
        <>
            <div className="all-characters-page__header">
                <h1>Characters</h1>
                <Link to='/characters/add' className="all-characters-page__header__add-button">
                    Ajout Personage
                </Link>
            </div>

            <CharactersTable
                items={allCharacters}
                pagination={filters}
                totalPages={totalPages}
                filters={filters}
                onPaginationChange={onPaginationChange}
                onFilterChange={setFilters}
            />
        </>
    )
}