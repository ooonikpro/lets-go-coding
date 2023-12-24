<script setup>
  import { ref } from 'vue';

  import UiTextField from '../shared/ui/UiTextField.vue';
  import UiButton from '../shared/ui/UiButton.vue';

  const emit = defineEmits(['submit']);

  const text = ref('');

  const onSubmit = () => {
    if (text.value.trim().length > 2) emit('submit', { text });

    console.log(text);
  }
</script>

<template>
  <form class="add-question-form" @submit.prevent="onSubmit">
    <UiTextField placeholder="Введите текст вашего вопроса" :value="text" @update:value="text = $event"/>
    <UiButton>Добавить вопрос</UiButton>
  </form>
</template>

<style lang="scss" scoped>
.add-question-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
}
</style>