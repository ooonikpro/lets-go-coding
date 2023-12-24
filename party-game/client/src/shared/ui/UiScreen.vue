<template>
  <div>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
div {
  flex: 1 1 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>