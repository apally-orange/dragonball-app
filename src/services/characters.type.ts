

interface Character {
    id: number;
    name: string;
    image: string;
    description: string;
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