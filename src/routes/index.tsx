import { queryOptions } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
  loader: ({ context: { queryClient } }) =>
    queryClient.fetchQuery(charactersOptions),
})

const charactersOptions = queryOptions({
  queryKey: ['characters'],
  queryFn: () => fetch('https://dragonball-api.com/api/characters?page=1&limit=10').then(res => res.json()),
})

interface Character {
  id: number;
  name: string;
  image: string;
}

function App() {
  const data = Route.useLoaderData()

  return (<>
    <h1>Home</h1>
    <CharacterList items={data.items} />
  </>

  )
}

interface CharacterListProps {
  items: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ items }) => {
  return (
    <div className="character-list">
      {items.map((character) => (
        <div key={character.id} className="character-card">
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} width={100} />
        </div>
      ))}
    </div>
  );
};