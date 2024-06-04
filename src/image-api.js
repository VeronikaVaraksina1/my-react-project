import axios from "axios"

export const fetchImages = async (query) => {
    axios.defaults.baseURL = "https://api.unsplash.com";

    const response = axios.get('/search/photos', {
        params: {
            client_id: 'WQte5tUczRGJeybmP_5ZIUTrHW_TWHIy2fxah8dxyTE',
            query,
            orientation: 'landscape',
        }
    })

    return response.data
}