import axios from 'axios'

export default class Api {
  API_URL =
    'https://frontend-engineering-test-api.netlify.app/.netlify/functions/articles'
  ax
  numArticlesPerPage = 10
  lastPageNumRequested = 0
  // currentPageNumber ???

  constructor() {
    this.ax = axios.create({
      baseURL: this.API_URL
    })
  }

  getNextPageOfArticles(currentPage) {
    if (currentPage > this.lastPageNumRequested) {
      this.lastPageNumRequested = currentPage
      return this.ax.get(
        `?page=${currentPage}&pageSize=${this.numArticlesPerPage}`
      )
    }
  }
}
