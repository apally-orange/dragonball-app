import { Layout } from '@/components/layout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_withoutNav')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Layout showNav={false}>
            <Outlet />
        </Layout>
    )
}
