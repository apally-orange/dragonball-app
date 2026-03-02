import { AddCharacterPage } from '@/pages/add-character'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/add')({
    component: AddCharacterPage,
    staticData: { breadcrumb: "Add Character" },
})


