import { Affiliation, Gender, Race } from '@/components/table/colums-def'
import { AllCharactersPage } from '@/pages/all-characters-page'
import { getAllCharactersQueryOptions } from '@/queries/all-character'
import { PaginationParams } from '@/services/table.type'
import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'

const charactersParamsSchema = z.object({
    pageIndex: z.number().optional().default(1),
    pageSize: z.number().optional().default(10),
    name: z.string().optional(),
    gender: z.enum(Gender).optional(),
    race: z.enum(Race).optional(),
    affiliation: z.enum(Affiliation).optional(),
})


export const Route = createFileRoute('/characters/')({
    staticData: { breadcrumb: "Characters" },
    component: AllCharactersPage,
    loaderDeps: ({ search }) => ({
        pageIndex: search.pageIndex,
        pageSize: search.pageSize,
        name: search.name,
        gender: search.gender,
        race: search.race,
        affiliation: search.affiliation,
    } as Partial<Character & PaginationParams>),
    loader: ({ context: { queryClient }, deps }) =>
        queryClient.ensureQueryData(getAllCharactersQueryOptions({ filters: deps })),
    wrapInSuspense: true,
    validateSearch: charactersParamsSchema,
    notFoundComponent: () => <div>Characters not found</div>,
    errorComponent: ({ error }) => <div>Error: {error.message}</div>,
})





