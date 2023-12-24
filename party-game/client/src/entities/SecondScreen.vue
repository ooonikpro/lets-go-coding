<script setup>
  import UiScreen from '@/shared/ui/UiScreen.vue';
  import AddEquestionForm from './AddEquestionForm.vue';

</script>

<template>
  <UiScreen>
    <h2>Вопросы</h2>

    <slot/>

    <AddEquestionForm/>

    <slot name="bottom-action"/>
  </UiScreen>
</template>

<style lang="scss" scoped>
h2 {
  width: 100%;
  padding: 0 20px;
  text-align: left;
  font-size: 36px;
  margin-bottom: 24px;
}
</style>