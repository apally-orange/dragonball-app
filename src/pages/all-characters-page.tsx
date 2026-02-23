import { CharactersTable } from "@/components/characters-table"
import { FooterPagination } from "@/components/footer-pagination"
import { getAllCharactersQueryOptions } from "@/queries/all-character"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useState } from "react"

const initialPagination = { page: 0, limit: 10 }

export function AllCharactersPage() {
    const [pagination, setPagination] = useState({ pageIndex: initialPagination.page, pageSize: initialPagination.limit })
    const data = useSuspenseQuery(getAllCharactersQueryOptions(pagination))

    const { totalPages } = data.data.meta
    const allCharacters = data.data.items

    return (
        <>
            <h1>Characters</h1>
            <CharactersTable items={allCharacters} />
            <FooterPagination
                pageIndex={pagination.pageIndex}
                pageSize={pagination.pageSize}
                totalPages={totalPages}
                setPagination={setPagination} />
        </>
    )
}