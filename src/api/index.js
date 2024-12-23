import axios from "axios";

const api = axios.create({
  method: "GET",
  baseURL: "https://flight-radar1.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "7951ad4613msh3fb171e320948e2p165213jsn76faf5a2a96d",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
