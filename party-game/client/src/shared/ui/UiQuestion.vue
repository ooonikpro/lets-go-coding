<template>
  <quote><slot/></quote>
</template>

<style lang="scss" scoped>
quote {
  display: flex;
  width: 100%;
  padding: 8px;
  font-size: 24px;
  border-radius: 3px;
  border: 1px solid rgba(0,0,0, .1);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>