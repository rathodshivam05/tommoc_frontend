import axios from "axios";
import { base_url } from "../utils/baseUrl";

const login = async (user) => {
    console.log(user);
    const response = await axios.post(`${base_url}/login`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};



const authService = {
    login,
};

export default authService;