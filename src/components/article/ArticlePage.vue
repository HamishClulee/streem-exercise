<template>
  <section class="min-h-article-page flex flex-col items-center justify-center">
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
import LoadingSpinner from '@/components/loaders/LoadingSpinner'
import Article from '@/components/article/Article.vue'
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
        entries.forEach(
          ({ isIntersecting, boundingClientRect, intersectionRatio }) => {
            // This equates to: if scrolling down, and hasn't already intersected
            // Means it won't fire when scrolling up, or scrolling back down
            if (
              boundingClientRect.y < this.previousY &&
              intersectionRatio > this.previousRatio &&
              isIntersecting
            ) {
              this.requestNewPage()
            }

            this.previousY = boundingClientRect.y
            this.previousRatio = intersectionRatio
          }
        )
      })
      this.observer.observe(this.$el)
    }
  },
  methods: {
    requestNewPage() {
      this.$api
        .getNextPageOfArticles(this.currentPage)
        .then(({ data }) => {
          if (data?.length) {
            this.json = data
            this.isLoading = false
            this.$parent.$emit('increment-page-number')
          } else {
            this.isLoading = false
            this.endOfFeedMessage = 'No more articles to display'
          }
        })
        .catch(() => {
          // @TODO handle api errors
        })
    },
  },
}
</script>
