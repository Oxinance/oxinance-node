import axios from "axios";

const instance = axios.create({ baseURL: "https://api.oxinance.com" })

export default instance;
