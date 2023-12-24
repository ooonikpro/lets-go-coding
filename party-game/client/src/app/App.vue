<script setup lang="ts">
  import { ref } from 'vue';
  import FirstScreen from '../entities/FirstScreen.vue';
  import SecondScreen from '../entities/SecondScreen.vue';

  const questions = ref([
    'Текст нашего новодобавленного вопроса',
    'Текст нашего новодобавленного вопроса',
    'Текст нашего новодобавленного вопроса',
    'Текст нашего новодобавленного вопроса',
    'Текст нашего новодобавленного вопроса',
  ]);
</script>

<template>
  <SecondScreen :questions="questions" isShowQuestions/>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

* {
  padding: 0;
  margin: 0;

  &, &:before, &:after {
    box-sizing: border-box;
  }
}
</style>
