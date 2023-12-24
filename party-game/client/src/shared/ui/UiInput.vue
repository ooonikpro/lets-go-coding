<script setup>
  defineProps(['value']);
  defineEmits(["update:value"]);
</script>

<template>
  <input type="text" :value="value" @input="$emit('update:value', $event.target.value)" />
</template>

<style lang="scss" module>
  input {
    display: block;
    width: 100%;
    height: 35px;
    border-radius: 4px;
    padding-left: 10px;
    outline: none;
    border: 1px solid rgba(0,0,0, .5);

    &:focus {
      border-color: green;
    }
  }
</style>