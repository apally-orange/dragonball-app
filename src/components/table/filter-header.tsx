import { Filters } from "@/services/table.type";
import { Header } from "@tanstack/react-table";
import { useMemo } from "react";
import { DebouncedInput } from "../debounced-input";

interface FilterHeaderProps {
    header: Header<Character, any>;
    filters: Filters<Character>;
    onFilterChange: (dataFilters: Partial<Character>) => void;
}

export function FilterHeader({ header, filters, onFilterChange }: FilterHeaderProps) {
    const fieldMeta = header.column.columnDef.meta;
    // no filter for this column
    if (!header.column.getCanFilter() || fieldMeta?.filterKey === undefined) {
        return (<div className="characters-table__filter" />)
    }

    const AllFilterOptions = useMemo(() => {
        if (fieldMeta.filterVariant === "enum") {
            return [
                { value: "", label: "All" },
                ...(fieldMeta.filterOptions ?? []),
            ]
        }
        return []
    }, [fieldMeta.filterVariant, fieldMeta.filterOptions])

    return (
        <div className="characters-table__filter">
            {fieldMeta.filterVariant === "enum" ?
                <select
                    value={filters[fieldMeta.filterKey] ?? ""}
                    onChange={(e) => onFilterChange({
                        [fieldMeta.filterKey as keyof Character]: e.target.value,
                    } as Partial<Character>)
                    } >
                    {AllFilterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                : (
                    <DebouncedInput
                        className="w-36 border shadow rounded"
                        onChange={(value) => {
                            onFilterChange({
                                [fieldMeta.filterKey as keyof Character]: value,
                            } as Partial<Character>);
                        }}
                        placeholder="Search..."
                        type={
                            fieldMeta.filterVariant === "number"
                                ? "number"
                                : "text"
                        }
                        value={filters[fieldMeta.filterKey] ?? ""}
                    />
                )}
        </div>
    )
}