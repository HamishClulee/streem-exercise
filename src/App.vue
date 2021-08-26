<template>
  <main class="bg-streem-dark-blue min-h-screen flex flex-col items-center">
    <Navbar />

    <section class="w-2/3 bg-white rounded-lg border border-grey-500 my-8 p-4 min-h-8">
      <LoadingSpinner v-if="isLoading" />
      {{ json }}
    </section>
  </main>
</template>

<script>
import Navbar from './components/nav/Navbar'
import LoadingSpinner from './components/loaders/LoadingSpinner'

export default {
  name: 'App',
  components: {
    Navbar,
    LoadingSpinner,
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
