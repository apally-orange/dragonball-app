import { Link } from '@tanstack/react-router';
import './characters_list.scss';

export function CharactersList({ items }: { items: Character[] }) {
	return (
		<ul className='list'>
			{items.map((character: Character) => (
				<Link
					className='list-card'
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
