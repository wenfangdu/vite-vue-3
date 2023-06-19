<script setup lang="ts">
  defineProps<{
    msg: string
  }>()

  console.log('called')
</script>

<template>
  <div class="greetings" @click="console.warn(0)">
    <h1 class="green" @click="console.error(1)">{{ msg }}</h1>
    <h3 @click="console.log(3)">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
      +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
      . What's next?
    </h3>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
