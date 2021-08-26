<template>
  <main class="bg-streem-dark-blue min-h-screen flex flex-col items-center">
    <Navbar />
    <div
      v-show="showGlobalSpinner"
      class="global-spinner-con"
    >
      <LoadingSpinner />
    </div>
    <section class="w-2/3 bg-white rounded-lg border border-grey-500 mt-8 p-4">
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
      showGlobalSpinner: false,
      json: '',
    }
  },
  created() {
    this.showGlobalSpinner = true
    this.$api.getArticles(1, 20).then((res) => {
      this.json = res.data
      this.showGlobalSpinner = false
    })
  },
  methods: {},
}
</script>
