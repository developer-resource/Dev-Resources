import axios from "axios"
import { BASE_URL, authHeaderService } from "../utils/helper"

const getCardDetails = async (id) => {
    const transactionUrl = `${BASE_URL}/jobs/${id}`

    return await axios.get(transactionUrl, { headers: authHeaderService() })
}

export { getCardDetails }