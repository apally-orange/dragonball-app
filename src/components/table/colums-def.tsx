import { createColumnHelper, RowData } from "@tanstack/react-table";


declare module "@tanstack/react-table" {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ColumnMeta<TData extends RowData, TValue> {
        filterKey?: keyof TData;
        filterVariant?: "text" | "number" | "enum";
        filterOptions?: { value: string; label: string }[]; // for enum filters
    }
}

export const Race = {
    Saiyan: "Saiyan",
    Namekian: "Namekian",
    Majin: "Majin",
    FriezaRace: "Frieza Race",
    Android: "Android",
    JirenRace: "Jiren Race",
    God: "God",
    Evil: "Evil",
    Nucleico: "Nucleico",
    NucleicoBenigno: "Nucleico benigno",
    Unknown: "Unknown",
} as const

export const Gender = {
    Male: "Male",
    Female: "Female",
    Other: "Other",
    Unknown: "Unknown",
} as const

export const Affiliation = {
    ZFighter: "Z Fighter",
    RedRibbonArmy: "Red Ribbon Army",
    FriezaForce: "Frieza Force",
    NamekianWarrior: "Namekian Warrior",
    Freelancer: "Freelancer",
    ArmyOfFrieza: "Army of Frieza",
    PrideTroopers: "Pride Troopers",
    AssistantOfVermoud: "Assistant of Vermoud",
    AssistantOfBeerus: "Assistant of Beerus",
    Villain: "Villain",
    Other: "Other",
} as const

const columnHelper = createColumnHelper<Character>()

export const mapToOptions = (values: string[]) => values.map((v) => ({ value: v, label: v }))

export const raceOptions = mapToOptions(Object.values(Race))
export const genderOptions = mapToOptions(Object.values(Gender))
export const affiliationOptions = mapToOptions(Object.values(Affiliation))
export const columns = [
    columnHelper.accessor('name', { header: () => 'Nom', meta: { filterKey: "name", filterVariant: "text" }, }),
    columnHelper.accessor('ki', { header: () => 'Ki', }),
    columnHelper.accessor('race', {
        header: () => 'Famille', meta: {
            filterKey: "race", filterVariant: "enum", filterOptions: raceOptions,
        },
    }),
    columnHelper.accessor('gender', {
        header: () => 'Genre', meta: {
            filterKey: "gender", filterVariant: "enum", filterOptions: genderOptions,
        },
    }),
    columnHelper.accessor('affiliation', {
        header: () => 'Affiliation', meta: {
            filterKey: "affiliation", filterVariant: "enum", filterOptions: affiliationOptions,
        },
    }),
]