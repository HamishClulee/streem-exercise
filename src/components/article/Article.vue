<template>
  <article class="w-full bg-white p-2 flex flex-col border mb-4 rounded-lg border-util-500">
    <h4 class="text-xl mt-2 mb-1 text-streem-dark-blue">
      <a
        :href="json.url"
        target="_blank"
      >{{ json.title }}</a>
    </h4>

    <ArticleDetails
      :author="json.author"
      :created-at="new Date(json.created_at)"
      :source="json.source"
      :word-count="json.word_count"
    />

    <h4 class="text-lg my-4 text-streem-dark-blue border-b border-streem-dark-blue w-full">
      Excerpts
    </h4>
    <!-- eslint-disable vue/no-v-html -->
    <!-- DOMPurify in usage -->
    <div
      v-for="(excerpt, index) in json.excerpts"
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
  </article>
</template>
<script>
import DOMPurify from 'dompurify'
import ArticleDetails from './ArticleDetails.vue'

export default {
  name: 'Article',
  components: {
    ArticleDetails,
  },
  props: {
    json: {
      type: Object,
      default: null,
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
em {
  background-color: #ff7675;
  opacity: 0.7;
  padding: 2px;
}
</style>
