import { Table } from "@tanstack/react-table";


interface TableFooterProps<TableData> {
    table: Table<TableData>
    totalPages?: number
}


export function FooterPagination<TableData>(
    props: Readonly<TableFooterProps<TableData>>,
) {
    const table = props.table

    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                gap: '0.5rem',
                marginTop: 12,
            }}>
            <button
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}>
                Précédent
            </button>
            <span>
                Page {table.getState().pagination.pageIndex} sur {props.totalPages ?? table.getPageCount()}
            </span>
            <button
                disabled={table.getState().pagination.pageIndex >= (props.totalPages ?? table.getPageCount())}
                onClick={() => table.nextPage()}>
                Suivant
            </button>
            <span style={{ marginLeft: 'auto' }}>Afficher</span>
            <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                }}>
                {[5, 10, 20].map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    )
}