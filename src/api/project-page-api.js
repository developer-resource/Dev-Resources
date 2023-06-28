import axios from "axios"
import { BASE_URL } from "../utils/helper"

const getProjects = async () => {
    const transactionUrl = `${BASE_URL}/projects/getProjects`

    return axios.get(transactionUrl)
}

export { getProjects }