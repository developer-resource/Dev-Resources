import axios from "axios"
import { BASE_URL, authHeaderService } from "../utils/helper"

const JobSearch = (query) => {
    const transactionUrl = `${BASE_URL}/jobs?pageNumber=1&numberOfData=10&searchText=${query}`
    return axios.get(transactionUrl, { headers: authHeaderService() })
}


export { JobSearch }