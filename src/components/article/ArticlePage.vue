<template>
  <section class="min-h-screen flex flex-col items-center justify-center">
    <LoadingSpinner v-if="isLoading" />
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
  data() {
    return {
      isLoading: true,
      json: '',
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$api
          .getNextPageOfArticles()
          .then((res) => {
            this.json = res.data
            this.isLoading = false
            this.$api.incrementPageNumber()
          })
          .catch((err) => {
            console.log(err)
            debugger
          })
      }
    })

    this.observer.observe(this.$el)
  },
}
</script>
