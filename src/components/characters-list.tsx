import '@/styles/style.scss';
import { Link } from '@tanstack/react-router';

export function CharactersList({ items }: { items: Character[] }) {
	return (
		<ul className='list'>
			{items.map((character: Character) => (
				<Link
					className='list__card'
					key={character.id}
					to={`/characters/${character.id}`}
					params={{ characterId: character.id }}
				>
					<h3>{character.name}</h3>
					<img src={character.image} alt={character.name} />
				</Link>
			))
			}
		</ul >
	);
}
