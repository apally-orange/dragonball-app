import '@/styles/style.scss';
import { useNavigate } from '@tanstack/react-router';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table';

const columnHelper = createColumnHelper<Character>()
const columns = [
	columnHelper.accessor('name', { header: () => 'Nom' }),
	columnHelper.accessor('ki', { header: () => 'Ki' }),
	columnHelper.accessor('race', { header: () => 'Famille' }),
	columnHelper.accessor('gender', { header: () => 'Genre' }),
	columnHelper.accessor('affiliation', { header: () => 'Affiliation' }),
]


export function CharactersTable({ items }: { items: Character[] }) {
	const table = useReactTable({
		data: items,
		columns: columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const navigate = useNavigate()
	const onRowClick = (character: Character) => {
		navigate({
			params: { characterId: character.id.toString() },
			to: '/characters/$characterId',
		})
	}

	return (
		<table>
			<thead>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<th
								key={header.id}
								onClick={
									header.column.getCanSort()
										? header.column.getToggleSortingHandler()
										: undefined
								}
								style={{
									borderBottom: '1px solid #ddd',
									cursor: header.column.getCanSort() ? 'pointer' : 'default',
									padding: '8px',
									textAlign: 'left',
								}}>
								{flexRender(
									header.column.columnDef.header,
									header.getContext(),
								)}
								{header.column.getCanSort()
									? header.column.getIsSorted()
										? header.column.getIsSorted() === 'asc'
											? ' 🔼'
											: ' 🔽'
										: ''
									: null}
							</th>
						))}
					</tr>
				))}
			</thead>

			<tbody>
				{table.getRowModel().rows.map((row) => (
					<tr key={row.id} onClick={() => onRowClick(row.original)}>
						{row.getVisibleCells().map((cell) => (
							<td
								key={cell.id}
								style={{ borderBottom: '1px solid #eee', padding: '8px' }}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
