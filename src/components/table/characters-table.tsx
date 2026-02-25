import { Filters } from '@/services/table.type';
import '@/styles/style.scss';
import { useNavigate } from '@tanstack/react-router';
import {
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	OnChangeFn,
	useReactTable,
	type PaginationState
} from '@tanstack/react-table';
import './characters-table.scss';
import { columns } from './colums-def';
import { FilterHeader } from './filter-header';
import { FooterPagination } from './footer-pagination';

export const DEFAULT_PAGE_INDEX = 1
export const DEFAULT_PAGE_SIZE = 10

interface CharactersTableProps {
	items: Character[];
	pagination: PaginationState;
	totalPages?: number;
	filters: Filters<Character>;
	onPaginationChange?: OnChangeFn<PaginationState>;
	onFilterChange: (dataFilters: Partial<Character>) => void;
}

export function CharactersTable({
	items,
	pagination,
	totalPages,
	filters,
	onPaginationChange,
	onFilterChange
}: CharactersTableProps) {
	const table = useReactTable({
		data: items,
		columns: columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		manualFiltering: true,
		manualPagination: true,
		autoResetPageIndex: false,
		pageCount: totalPages,
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
		<>
			<table className="characters-table">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {

								return (
									<th
										key={header.id}>
										<div
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
										</div>
										<FilterHeader
											header={header}
											filters={filters}
											onFilterChange={onFilterChange}
										/>
									</th>
								)
							})}
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
			</table>
			<FooterPagination table={table} totalPages={totalPages} />
		</>
	);
}
