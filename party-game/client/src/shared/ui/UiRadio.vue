<script setup>
defineProps(['value', 'name']);
</script>

<template>
  <label>
    <input type="radio" :value="value" :name="name">
  </label>
</template>

<style lang="scss">

</style>