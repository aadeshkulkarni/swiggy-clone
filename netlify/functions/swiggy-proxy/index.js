import { PROXY_CORS } from '../../../src/utils/constants';

const fetch = require('node-fetch')

export default async (req, context) => {
    let data;
    try {
        const { url } = context.params
        const response = await fetch(PROXY_CORS+url)
        data = await response.json()
        statusCode = 200
        return data
    }
    catch (error) {
        statusCode = error.statusCode
        return error
    }
}

export const config = {
    path: "/swiggy-proxy/:url"
}