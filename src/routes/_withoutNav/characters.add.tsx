import { AddCharacterPage } from '@/pages/add-character'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_withoutNav/characters/add')({
    component: AddCharacterPage,
    staticData: { breadcrumb: "Add Character" },
})


