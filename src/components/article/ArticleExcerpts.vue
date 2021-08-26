<template>
  <section>
    <h4 class="text-lg my-4 text-streem-dark-blue border-b border-streem-dark-blue w-full">
      Excerpts
    </h4>
    <!-- eslint-disable vue/no-v-html -->
    <!-- DOMPurify in usage -->
    <div
      v-for="(excerpt, index) in excerpts"
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
      <button
        class="mb-2 text-left"
        v-html="santise(excerpt.text)"
      />
      <!--eslint-enable-->
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
  methods: {
    santise(html) {
      return DOMPurify.sanitize(html)
    },
  },
}
</script>
<style>
</style>
