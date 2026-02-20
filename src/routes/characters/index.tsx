import { CharactersPage } from '@/pages/character-page'
import { getAllCharactersQueryOptions } from '@/queries/all-character'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/')({
    component: CharactersPage,
    loader: ({ context: { queryClient } }) =>
        queryClient.fetchQuery(getAllCharactersQueryOptions()),
})



