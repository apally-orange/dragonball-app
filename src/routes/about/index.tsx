import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
    staticData: { breadcrumb: "About" },
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <h1>A Propos</h1>
            <p>Ceci est une application créée pour apprendre React et TanStack Router.</p>
        </div>
    )
}
