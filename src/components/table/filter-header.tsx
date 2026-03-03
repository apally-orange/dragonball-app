import { Filters } from "@/services/table.type";
import { Link } from "@tanstack/react-router";
import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { DebouncedInput } from "../debounced-input";

interface FilterHeaderProps {
    table: Table<Character>;
    filters: Filters<Character>;
    onFilterChange: (dataFilters: Partial<Character>) => void;
}

export function FilterHeader(props: Readonly<FilterHeaderProps>,) {
    const [filtersVisible, setFiltersVisible] = useState(false)

    // TODO: recabler les filtres
    return (
        <div className="characters-table__filters-bar">
            <div className="characters-table__filters-bar-left">

                <button className="characters-table__filters-bar-left-filter-button"
                    onClick={() => setFiltersVisible(!filtersVisible)}>
                    <svg className="filters-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M3 5h18v2l-7 8v5l-4 2v-7L3 7V5z" fill="currentColor" />
                    </svg>
                    Filters
                </button>
                <DebouncedInput
                    className="characters-table__filters-bar-input"
                    onChange={(value) => {
                        props.onFilterChange({
                            ['name']: value,
                        } as Partial<Character>);
                    }}
                    placeholder="Rechercher un personnage..."
                    type={"text"}
                    value={""}
                    icon={<span className="characters-table__filters-bar-input-icon">🔍 </span>}
                />
            </div>
            <Link to='/characters/add' className="characters-table__filters-bar-add-button">
                Ajouter un personnage
            </Link>
        </div>
    )
}