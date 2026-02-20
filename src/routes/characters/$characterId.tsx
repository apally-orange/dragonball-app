import { DetailCharactersPage } from '@/pages/detail-character-page'
import { getCharacterQueryOptions } from '@/queries/charater'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/$characterId')({
    component: RouteComponent,
    loader: async ({ params: { characterId }, context: { queryClient } }) => {
        return queryClient.fetchQuery(getCharacterQueryOptions(characterId))
    }
})

function RouteComponent() {
    const { characterId } = Route.useParams()

    return <DetailCharactersPage characterId={characterId} />
}
