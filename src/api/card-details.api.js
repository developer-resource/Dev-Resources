import axios from "axios"
import { BASE_URL } from "../utils/helper"

const getCardDetails = async (id) => {
    const transactionUrl = `${BASE_URL}/jobs/${id}`

    return await axios.get(transactionUrl)
}

export { getCardDetails }