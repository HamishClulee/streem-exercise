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
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$api
          .getNextPageOfArticles(this.currentPage)
          .then((res) => {
            this.json = res.data
            this.isLoading = false
            this.$parent.$emit('increment-page-number')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
    this.observer.observe(this.$el)
  },
}
</script>
