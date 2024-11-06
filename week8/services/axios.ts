import axios from "axios";

const ENV = process.env.EXPO_PUBLIC_API_URL;

export const getUsers = () =>{
    return axios.get(ENV + "users");
};