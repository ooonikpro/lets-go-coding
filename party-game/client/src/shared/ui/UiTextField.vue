<script setup>
  defineProps(['value']);
  defineEmits(["update:value"]);
</script>

<template>
  <textarea :value="value" @input="$emit('update:value', $event.target.value)" />
</template>

<style lang="scss" module>
  textarea {
    display: block;
    width: 100%;
    max-width: 100%;
    min-height: 120px;
    border-radius: 4px;
    padding: 10px;
    outline: none;
    border: 1px solid rgba(0,0,0, .5);

    &:focus {
      border-color: green;
    }
  }
</style>