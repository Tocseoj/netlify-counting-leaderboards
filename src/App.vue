<template>
  <HomePage />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap')

body
  margin 0
  overflow scroll
  overflow-x hidden
  font-family 'Noto Sans', sans-serif

*
  box-sizing border-box

#app
  max-width 768px
  margin 0 auto
  text-align center
  font-size 16px
  min-height 100vh
  display flex
  flex-direction column
</style>
