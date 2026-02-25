import { Table } from "@tanstack/react-table";
import './characters-table.scss';

interface TableFooterProps<TableData> {
    table: Table<TableData>
    totalPages?: number
}


export function FooterPagination<TableData>(
    props: Readonly<TableFooterProps<TableData>>,
) {
    const table = props.table

    return (
        <div className="footer-pagination">
            <button
                className="footer-pagination__button"
                onClick={() => table.previousPage()}
                disabled={table.getState().pagination.pageIndex === 1}>
                Précédent
            </button>
            <span className="footer-pagination__info">
                Page {table.getState().pagination.pageIndex} sur {props.totalPages ?? table.getPageCount()}
            </span>
            <button
                className="footer-pagination__button"
                disabled={table.getState().pagination.pageIndex >= (props.totalPages ?? table.getPageCount())}
                onClick={() => table.nextPage()}>
                Suivant
            </button>
            <span className="footer-pagination__label">Afficher</span>
            <select
                className="footer-pagination__select"
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