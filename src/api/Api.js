import axios from "axios";


export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hIJxC3hsKL28cqEEzyIlcQ5EhZ21C697MR1vEQDiQHY ",
  },
})