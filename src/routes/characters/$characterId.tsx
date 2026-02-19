import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/$characterId')({
    component: RouteComponent,
})

function RouteComponent() {
    const { characterId } = Route.useParams()

    return <div>Hello "/characters/{characterId}"!</div>
}
