import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'

export const AXIOS_CONFIG: CreateAxiosDefaults<unknown> = {
    baseURL: 'https://dragonball-api.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
}

export const client: AxiosInstance = axios.create(AXIOS_CONFIG)

export const Service = {
    client,
}