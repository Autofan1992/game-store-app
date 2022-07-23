import axios from 'axios'

export const paymentAPIInstance = axios.create({
    baseURL: 'https://game-store-server-8.herokuapp.com'
})