<template>
  <button>
    <slot/>
  </button>
</template>

<style lang="scss" module>
button {
  padding: 10px 30px;
  height: 70px;
  font-size: 18px;
  border-radius: 4px;
  background-color: #0BB8DE;
  color: white;
  border: none;
  appearance: none;
  
  &:hover {
    cursor: pointer;
  }
}
</style>