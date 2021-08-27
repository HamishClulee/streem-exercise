<template>
  <main class="bg-streem-dark-blue min-h-screen h-full flex flex-col items-center">
    <Navbar />

    <section class="w-3/4 bg-white rounded-lg border border-grey-500 my-8 p-4 min-h-8">
      <ArticlePage
        v-for="(empty, index) in Array(999)"
        :key="index"
      />
    </section>
  </main>
</template>

<script>
import Navbar from './components/nav/Navbar'
import ArticlePage from './components/article/ArticlePage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ArticlePage,
  },
  data() {
    return {
      loadPushed: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadPushed = true
    }, 3000)
  },
}
</script>
