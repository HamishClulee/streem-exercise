import axios from 'axios'

export default class Api {
  API_URL =
    'https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles'
  axios
  currentPage = 1
  numArticlesPerPage = 20

  constructor() {
    this.axios = axios.create({
      baseURL: this.API_URL
    })
  }

  incrementPageNumber() {
    this.currentPage++
  }

  getNextPageOfArticles() {
    return this.axios.get(
      `?page=${this.currentPage}&pageSize=${this.numArticlesPerPage}`
    )
  }
}
