import './characters_list.scss';

export function CharactersList({ items }: { items: Character[] }) {
	return (
		<ul className='list'>
			{items.map((character: Character) => (
				<li
					className='list-card'
					key={character.id}
				>
					<h3>{character.name}</h3>
					<img src={character.image} alt={character.name} />
				</li>
			))}
		</ul>
	);
}
