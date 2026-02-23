

interface Character {
    id: number;
    name: string;
    image: string;
    description: string;
    race: string;
    gender: string;
    affiliation: string;
    ki: number;
}

interface AllCharacters {
    items: Character[];
    meta: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    };
}