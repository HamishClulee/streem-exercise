<template>
  <main class="bg-streem-dark-blue min-h-screen h-full flex flex-col items-center">
    <Navbar />

    <section class="w-3/4 bg-white rounded-lg border border-grey-500 my-8 p-4 min-h-8">
      <LoadingSpinner v-if="isLoading" />
      <Article
        v-for="(article, index) in json"
        :key="index"
        :json="article"
      />
    </section>
  </main>
</template>

<script>
import Navbar from './components/nav/Navbar'
import LoadingSpinner from './components/loaders/LoadingSpinner'
import Article from './components/article/Article.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    LoadingSpinner,
    Article,
  },
  data() {
    return {
      isLoading: false,
      json: '',
    }
  },
  created() {
    this.isLoading = true
    this.$api.getArticles(1, 20).then((res) => {
      this.json = res.data
      this.isLoading = false
    })
  },
  methods: {},
}
</script>
