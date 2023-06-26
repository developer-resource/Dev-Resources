import axios from "axios"

const fetchHomeData = (pageNo) => {
    const transactionUrl = 'https://dev-resources-backend.onrender.com/api/jobs'

    return axios.get(transactionUrl)
}

export { fetchHomeData }