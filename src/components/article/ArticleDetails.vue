<template>
  <section class="flex flex-row items-center justify-between">
    <details
      open
      class="text-sm util-500 mb-2"
    >
      <summary>Published by {{ source.name }}</summary>
      <summary class="ml-8">
        Word count: {{ wordCount }}
      </summary>
      <summary class="ml-8">
        Published at: {{ new Date(createdAt) }}
      </summary>
      <summary
        v-if="author.name"
        class="ml-8 flex flex-row items-center"
      >
        Authored by: {{ author.name }}
      </summary>
    </details>
    <div
      v-if="safeSrc"
      class="mr-8 ml-4"
    >
      <img
        class="w-32"
        :src="safeSrc"
      >
    </div>
    <section />
  </section>
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
  data() {
    return {
      safeSrc: null,
    }
  },
  mounted() {
    this.checkSrc()
  },
  methods: {
    checkSrc() {
      var img = new Image()
      img.onload = this.imgOk
      img.src = this.source.logo_url
    },
    imgOk() {
      this.safeSrc = this.source.logo_url
    },
  },
}
</script>
