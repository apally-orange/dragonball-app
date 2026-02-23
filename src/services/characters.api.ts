
import { Service } from '@/services/service.ts'

export async function getAllCharacters({ page = 1, limit = 10 }) {
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