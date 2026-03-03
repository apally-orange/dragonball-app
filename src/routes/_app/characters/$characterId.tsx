import { DetailCharactersPage } from '@/pages/detail-character-page'
import { DetailCharactersSkeletonPage } from '@/pages/detail-character-page-skeleton'
import { getCharacterQueryOptions } from '@/queries/charater'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/characters/$characterId')({
    staticData: {
        breadcrumb: (match) => `#${match.params.characterId}`,
    },
    component: RouteComponent,
    beforeLoad: async ({ params }) => {
        const characterId = params.characterId
        if (!characterId || isNaN(Number(characterId))) {
            throw notFound()
        }
    },
    loader: async ({ params: { characterId }, context: { queryClient } }) =>
        queryClient.ensureQueryData(getCharacterQueryOptions(characterId)),
    wrapInSuspense: true,
    notFoundComponent: () => <div>Character not found</div>,
    errorComponent: () => <div>Error invalid route</div>,
    pendingComponent: () => DetailCharactersSkeletonPage(),
})

function RouteComponent() {
    const { characterId } = Route.useParams()

    return <DetailCharactersPage characterId={characterId} />
}
