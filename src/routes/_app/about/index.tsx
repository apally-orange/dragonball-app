import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/about/')({
    staticData: { breadcrumb: "About" },
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div style={{ width: "100%", padding: "1rem" }}>
            <h1>A Propos</h1>
            <p>Ceci est une application créée pour apprendre React et TanStack Router.</p>
        </div>
    )
}
