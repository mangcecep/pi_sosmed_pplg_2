import axios from 'axios'

export const APISERVICES = () => axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 100000
})

export const config = (token) => ({
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
})