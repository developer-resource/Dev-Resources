import axios from "axios"

const fetchHomeData = () => {
    const transactionUrl = 'https://dev-resources-backend.onrender.com/api/jobs'

    return axios.get(transactionUrl)
}

export { fetchHomeData }