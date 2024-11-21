import { useState, useEffect } from "react";
import "dotenv/config"

function Fetch() {
    const API_Key = process.env.API_Key
    const Fetch = () => {
        const [data, setData] = useState([])
        useEffect(() => {
            fetch(`http://www.ctabustracker.com/bustime/api/v2/gettime?key=${API_Key}`)
        })
    }
}

export default Fetch