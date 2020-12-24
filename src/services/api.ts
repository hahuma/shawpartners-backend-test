import axios from "axios"

const githubApi = axios.create({
  baseURL: "https://api.github.com",
})

export { githubApi }
export default axios
