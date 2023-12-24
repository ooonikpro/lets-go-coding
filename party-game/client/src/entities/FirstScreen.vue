<script setup>
  import UiButton from '@/shared/ui/UiButton.vue';
  import UiScreen from '@/shared/ui/UiScreen.vue';

  defineEmits([
    'create-room'
  ]);
</script>

<template>
  <UiScreen>
    <h1>Party Game</h1>
    <UiButton @click="$emit('create-room')" :class="$style.createBtn">Создать комнату</UiButton>
  </UiScreen>
</template>

<style lang="scss" module>
h1 {
  text-align: center;
  width: 100%;
  margin-bottom: 54px;
  font-size: 72px;
}

.createBtn {
  width: 100%;
  max-width: 350px;
  height: 72px;
  font-size: 24px;

}
</style>