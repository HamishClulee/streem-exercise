<template>
  <section class="min-h-screen flex flex-col items-center justify-center">
    <LoadingSpinner v-if="isLoading" />
    <h3 v-else-if="endOfFeedMessage !== ''">
      {{ endOfFeedMessage }}
    </h3>
    <Article
      v-for="(article, index) in json"
      v-else
      :key="index"
      :json="article"
    />
  </section>
</template>

<script>
import LoadingSpinner from '../loaders/LoadingSpinner'
import Article from './Article.vue'
export default {
  name: 'ArticlePage',
  components: {
    LoadingSpinner,
    Article,
  },
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      isLoading: true,
      json: '',
      observer: null,
      previousY: 0,
      previousRatio: 0,
      endOfFeedMessage: '',
    }
  },
  mounted() {
    if (this.currentPage === 1) {
      this.requestNewPage()
    } else {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.y
          const currentRatio = entry.intersectionRatio
          const isIntersecting = entry.isIntersecting

          if (currentY < this.previousY) {
            if (currentRatio > this.previousRatio && isIntersecting) {
              this.requestNewPage()
            }
          }

          this.previousY = currentY
          this.previousRatio = currentRatio
        })
      })
      this.observer.observe(this.$el)
    }
  },
  methods: {
    requestNewPage() {
      this.$api
        .getNextPageOfArticles(this.currentPage)
        .then((res) => {
          console.log(res.data.length)
          if (res.data.length !== 0) {
            this.json = res.data
            this.isLoading = false
            this.$parent.$emit('increment-page-number')
          } else {
            this.isLoading = false
            this.endOfFeedMessage = 'No more articles to display'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
