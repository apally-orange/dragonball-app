


import { Service } from '@/services/service.ts'

export async function getCharacterById(characterId: string) {
    const result = await Service.client.get<Character>(
        'characters/' + characterId,
    )

    return result.data
}