<template>
  <article class="w-full bg-white p-2 flex flex-col border mb-4 rounded-lg border-util-500">
    <h4 class="text-xl mt-2 mb-1 text-streem-dark-blue">
      <a
        :href="json.url"
        target="_blank"
      >{{ json.title }}</a>
    </h4>
    <details
      open
      class="text-sm util-500 mb-2"
    >
      <summary>Published by {{ json.author.name }}</summary>
      <summary class="ml-8">
        Word count: {{ json.word_count }}
      </summary>
      <summary class="ml-8">
        Published at: {{ new Date(json.created_at) }}
      </summary>
      <summary class="ml-8">
        Published by: {{ json.source.name }} <img :src="json.source.logo_url">
      </summary>
    </details>
    <h4 class="text-lg my-4 text-streem-dark-blue border-b border-streem-dark-blue w-full">
      Excerpts
    </h4>
    <!-- eslint-disable vue/no-v-html -->
    <!-- DOMPurify in usage -->
    <div
      v-for="(excert, index) in json.excerpts"
      :key="index"
      class="my-4"
    >
      <span>
        <h5>
          Keywords: <em
            v-for="keyword in excert.keywords"
            :key="keyword"
            class="mr-2"
          >{{ keyword }}</em>
        </h5>
      </span>
      <button
        class="mb-2 text-left"
        v-html="santise(excert.text)"
      />
      <!--eslint-enable-->
    </div>
  </article>
</template>
<script>
import DOMPurify from 'dompurify'

export default {
  name: 'Article',
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
