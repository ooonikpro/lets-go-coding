<script setup>
  defineEmits([
    'start-game'
  ]);
</script>

<template>
  <div class="bottom-actions">
    <UiButton @click="$emit('start-game')">Начать игру</UiButton>
  </div>
</template>

<style lang="scss" scoped>
.bottom-actions {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  padding: 0 20px;
}
</style>