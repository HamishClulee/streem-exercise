<template>
  <main class="bg-streem-dark-blue min-h-screen h-full flex flex-col items-center font-body">
    <Navbar />

    <section class="w-3/4 bg-white rounded-lg border border-util-500 my-8 p-4 min-h-8">
      <ArticlePage
        v-for="(empty, index) in Array(currentPage)"
        :key="index"
        :current-page="currentPage"
      />
    </section>
  </main>
</template>

<script>
import Navbar from '@/components/nav/Navbar'
import ArticlePage from '@/components/article/ArticlePage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ArticlePage,
  },
  data() {
    return {
      loadPushed: false,
      currentPage: 1,
    }
  },
  mounted() {
    this.$on('increment-page-number', () => {
      this.currentPage++
    })
  },
}
</script>
