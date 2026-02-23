

interface PaginationProps {
    pageIndex: number;
    pageSize: number;
    totalPages: number;
    setPagination: React.Dispatch<React.SetStateAction<{
        pageIndex: number,
        pageSize: number
    }>>;
}

export function FooterPagination(
    { pageIndex, pageSize, totalPages, setPagination }: PaginationProps
) {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                gap: '0.5rem',
                marginTop: 12,
            }}>
            <button
                disabled={pageIndex === 0}
                onClick={() =>
                    setPagination((prev) => ({
                        ...prev,
                        pageIndex: prev.pageIndex - 1,
                    }))
                }>
                Précédent
            </button>
            <span>
                Page {pageIndex + 1} sur {totalPages}
            </span>
            <button
                disabled={pageIndex >= totalPages - 1}
                onClick={() =>
                    setPagination((prev) => ({
                        ...prev,
                        pageIndex: prev.pageIndex + 1,
                    }))
                }>
                Suivant
            </button>
            <span style={{ marginLeft: 'auto' }}>Afficher</span>
            <select
                onChange={(e) =>
                    setPagination((prev) => ({
                        ...prev,
                        pageIndex: 0,
                        pageSize: Number(e.target.value),
                    }))
                }
                value={pageSize}>
                {[5, 10, 20].map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    )
}