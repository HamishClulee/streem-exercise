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

    <ArticleExcerpts :excerpts="json.excerpts" />
  </article>
</template>
<script>
import ArticleDetails from './ArticleDetails.vue'
import ArticleExcerpts from './ArticleExcerpts.vue'

export default {
  name: 'Article',
  components: {
    ArticleDetails,
    ArticleExcerpts,
  },
  props: {
    json: {
      type: Object,
      default: null,
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
