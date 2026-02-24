import '@/styles/style.scss';
import './characters-table.scss';
import { useNavigate } from '@tanstack/react-router';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	OnChangeFn,
	useReactTable,
	type PaginationState
} from '@tanstack/react-table';
import { FooterPagination } from './footer-pagination';

export const DEFAULT_PAGE_INDEX = 0
export const DEFAULT_PAGE_SIZE = 10

const columnHelper = createColumnHelper<Character>()
const columns = [
	columnHelper.accessor('name', { header: () => 'Nom' }),
	columnHelper.accessor('ki', { header: () => 'Ki' }),
	columnHelper.accessor('race', { header: () => 'Famille' }),
	columnHelper.accessor('gender', { header: () => 'Genre' }),
	columnHelper.accessor('affiliation', { header: () => 'Affiliation' }),
]


export function CharactersTable(
	{ items, pagination, totalPages, onPaginationChange }:
		{ items: Character[], pagination: PaginationState, totalPages?: number, onPaginationChange?: OnChangeFn<PaginationState> }
) {
	const table = useReactTable({
		data: items,
		columns: columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		manualFiltering: true,
		manualPagination: true,
		autoResetPageIndex: false,
		onPaginationChange: onPaginationChange,
		state: { pagination }
	});

	const navigate = useNavigate()
	const onRowClick = (character: Character) => {
		navigate({
			params: { characterId: character.id.toString() },
			to: '/characters/$characterId',
		})
	}
	return (
		<table className="characters-table">
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
								className={`characters-table__th ${header.column.getCanSort() ? 'sortable' : ''}`}>
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
					<tr key={row.id} onClick={() => onRowClick(row.original)} className="characters-table__tr clickable">
						{row.getVisibleCells().map((cell) => (
							<td key={cell.id} className="characters-table__td">
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
			<FooterPagination table={table} totalPages={totalPages} />
		</table>
	);
}
