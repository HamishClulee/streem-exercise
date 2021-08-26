<template>
  <main class="app-main">
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-show="showGlobalSpinner"
        class="global-spinner-con"
      >
        <LoadingSpinner />
      </div>
    </transition>
    <Navbar />
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
      showGlobalSpinner: true,
    }
  },
  methods: {},
}
</script>
