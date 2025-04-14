<!-- <script >
//写数据
export default {
  data() {
    return {
      msg: '上海'
    }
  }
}
</script> -->
<script setup>
import { ref } from 'vue'
//调用响应式数据
const msg = ref('西安')
import ApiVue from './Api.vue'
import ArticleVue from './article.vue'
</script>

<template>
  <!-- html -->
  <!-- <h1>{{ msg }}</h1>
  <ApiVue></ApiVue> -->
  <ArticleVue></ArticleVue>
</template>

<style scoped>
/* 样式 */
h1 {
  color: red;
}
</style>
