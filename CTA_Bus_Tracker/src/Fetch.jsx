import "dotenv/config"
import axios from 'axios';

function Fetch() {
    const API_KEY = process.env.API_KEY
    const API_URL = 'https://www.ctabustracker.com/bustime/api/v2';

    const Fetch = axios.create({
    baseURL: API_URL,
    params: {
        key: API_KEY,
    },
    });
}

export default Fetch