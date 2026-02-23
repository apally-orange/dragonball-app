
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/components/table/characters-table'
import { Service } from '@/services/service.ts'

export async function getAllCharacters({ page = DEFAULT_PAGE_INDEX, limit = DEFAULT_PAGE_SIZE }) {
    const result = await Service.client.get<AllCharacters>(
        `characters?page=${page}&limit=${limit}`,
    )

    return result.data
}

export async function getCharacterById(characterId: string) {
    const result = await Service.client.get<Character>(
        'characters/' + characterId,
    )

    return result.data
}