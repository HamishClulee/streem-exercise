<template>
  <details
    open
    class="text-sm util-500 mb-2"
  >
    <summary>Published by {{ author.name }}</summary>
    <summary class="ml-8">
      Word count: {{ wordCount }}
    </summary>
    <summary class="ml-8">
      Published at: {{ new Date(createdAt) }}
    </summary>
    <summary class="ml-8">
      Published by: {{ source.name }} <img :src="source.logo_url">
    </summary>
  </details>
</template>

<script>
export default {
  name: 'ArticleDetails',
  props: {
    author: {
      type: Object,
      default: null,
      required: true,
    },
    wordCount: {
      type: Number,
      default: 0,
      required: true,
    },
    createdAt: {
      type: Date,
      default: null,
      required: true,
    },
    source: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>
