import axios from "axios"
import { BASE_URL, authHeaderService } from "../utils/helper"

const getProjects = async () => {
    const transactionUrl = `${BASE_URL}/projects/getProjects`

    return axios.get(transactionUrl, { headers: authHeaderService() })
}

export { getProjects }