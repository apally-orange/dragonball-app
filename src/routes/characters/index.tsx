import { AllCharactersPage } from '@/pages/all-characters-page'
import { getAllCharactersQueryOptions } from '@/queries/all-character'
import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

const charactersParamsSchema = z.object({
    pageIndex: z.number().optional().default(1),
    pageSize: z.number().optional().default(10),
    search: z.string().optional(),
})

export const Route = createFileRoute('/characters/')({
    component: AllCharactersPage,
    loaderDeps: ({ search }) => ({
        pageIndex: search.pageIndex,
        pageSize: search.pageSize,
    }),
    loader: ({ context: { queryClient }, deps }) =>
        queryClient.ensureQueryData(getAllCharactersQueryOptions(deps)),
    wrapInSuspense: true,
    validateSearch: charactersParamsSchema,

})





