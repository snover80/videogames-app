import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0a668e1f6ef3454faeb9862357fb60ab"
    }
})