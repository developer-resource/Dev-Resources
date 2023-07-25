import axios from "axios"
import { BASE_URL, authHeaderService } from "../utils/helper"

const fetchHomeData = (pageNo = 1) => {
    const transactionUrl = `${BASE_URL}/jobs?pageNumber=${pageNo}`

    return axios.get(transactionUrl, { headers: authHeaderService() })
}

export { fetchHomeData }