import axios from 'axios'

let apiUrl;

const apiUrls = {
 production: 'https://history-api.herokuapp.com/',
 development: 'https://history-api.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
 apiUrl = apiUrls.development
} else {
 apiUrl = apiUrls.production
}

const api = axios.create({
 baseURL: apiUrl
})

export default api;