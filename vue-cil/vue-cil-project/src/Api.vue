<script setup>
import { ref, onMounted } from 'vue'
//声明响应式数据
const count = ref(0)
function increment() {
  count.value++
}

//声明钩子函数
onMounted(() => {
  console.log('vue已经挂载完毕了')
})
</script>

<template>

  <button @click="increment">count: {{ count }}</button>
</template>