import axios from 'axios'

export default class Api {
  API_URL =
    'https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles'
  axios
  numArticlesPerPage = 10

  constructor() {
    this.axios = axios.create({
      baseURL: this.API_URL
    })
  }

  incrementPageNumber() {
    this.currentPage++
  }

  getCurrentPageNumber() {
    return this.currentPage
  }

  getNextPageOfArticles(currentPage) {
    return this.axios.get(
      `?page=${currentPage}&pageSize=${this.numArticlesPerPage}`
    )
  }
}
