import { AllCharactersPage } from '@/pages/all-characters-page'
import { getAllCharactersQueryOptions } from '@/queries/all-character'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/')({
    component: AllCharactersPage,
    loader: ({ context: { queryClient } }) =>
        queryClient.fetchQuery(getAllCharactersQueryOptions()),
})



