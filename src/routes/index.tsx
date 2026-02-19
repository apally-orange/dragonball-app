import { CharactersPage } from '@/pages/character_page';
import { getAllCharactersQueryOptions } from '@/queries/all_character';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: CharactersPage,
  loader: ({ context: { queryClient } }) =>
    queryClient.fetchQuery(getAllCharactersQueryOptions()),
})


