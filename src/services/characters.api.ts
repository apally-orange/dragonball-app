
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/components/table/characters-table'
import { Service } from '@/services/service.ts'
import { PaginationParams } from './table.type'

export async function searchCharacters(filters: Record<string, unknown>) {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && String(value).trim() !== '') {
            params.set(key, String(value))
        }
    })

    const qs = params.toString()
    const url = qs ? `characters?${qs}` : 'characters'

    const result = await Service.client.get<Character[]>(url)

    console.log("searchCharacters", result)

    return {
        items: result.data,
        meta: {
            totalItems: result.data.length,
            itemCount: result.data.length,
            itemsPerPage: result.data.length,
            totalPages: 1,
            currentPage: 1,
        },
    };
}


export async function getAllCharacters(
    { pageIndex = DEFAULT_PAGE_INDEX, pageSize = DEFAULT_PAGE_SIZE, }: Partial<PaginationParams>) {
    const params = new URLSearchParams()
    params.set('page', String(pageIndex))
    params.set('limit', String(pageSize))

    const qs = params.toString()
    const url = qs ? `characters?${qs}` : 'characters'

    const result = await Service.client.get<AllCharacters>(url)

    return result.data
}

export async function getCharacterById(characterId: string) {
    const result = await Service.client.get<Character>(
        'characters/' + characterId,
    )

    return result.data
}