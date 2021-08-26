import axios from 'axios'

export default class Api {
  API_URL =
    'https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles'
  axios

  constructor() {
    this.axios = axios.create({
      baseURL: this.API_URL
    })
  }
}
