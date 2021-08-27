<template>
  <section>
    <h4 class="text-lg my-4 text-streem-dark-blue border-b border-streem-dark-blue w-full">
      Excerpts
    </h4>
    <!-- eslint-disable vue/no-v-html -->
    <!-- DOMPurify in usage -->
    <div
      v-for="(excerpt, index) in excerpts"
      v-show="index === 0 || showAll"
      :key="index"
      class="my-4"
    >
      <span>
        <h5>
          Keywords: <em
            v-for="keyword in excerpt.keywords"
            :key="keyword"
            class="mr-2"
          >{{ keyword }}</em>
        </h5>
      </span>
      <div
        class="mb-2 text-left cursor-text"
        v-html="santise(excerpt.text)"
      />
      <!--eslint-enable-->

      <div
        v-if="!showAll && excerpts.length > 1"
        class="w-full flex items-center"
      >
        <button
          class="cursor-pointer inline-flex mx-auto items-center text-sm px-32 py-2 rounded-lg justify-center border font-medium shadow-sm focus:outline-none bg-streem-light-blue text-white"
          @click="showAll = true"
        >
          Show All Excerpts
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import DOMPurify from 'dompurify'
export default {
  name: 'ArticleExcerpts',
  props: {
    excerpts: {
      type: Array,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      showAll: false,
    }
  },
  methods: {
    santise(html) {
      return DOMPurify.sanitize(html)
    },
  },
}
</script>
<style>
</style>
