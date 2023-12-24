<script setup>
  import UiQuestion from '@/shared/ui/UiQuestion.vue';

  defineProps({
    questions: Array
  });
</script>

<template>
  <div class="questions-list">
    <UiQuestion v-for="(item, $index) in questions" :key="$index">{{ item }}</UiQuestion>
  </div>
</template>

<style lang="scss" scoped>
.questions-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}
</style>