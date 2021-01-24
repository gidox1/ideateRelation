import axios from "axios";

const config = require("../lib/config");

const Axios = axios.create({
    baseURL: config.api_base_url,
    headers: {
      "Content-Type": "application/json"
    }
});

export default Axios;