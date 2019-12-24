<template>
  <div>
    <navigation-bar></navigation-bar>
    <div class="l-default__main">
      <nuxt />
    </div>
  </div>
</template>
<style>
.l-default__main {
  margin: 1rem auto auto;
  max-width: 1012px;
}
</style>
<script>
  import NavigationBar from "../components/organisms/NavigationBar";
  export default {
    components: {NavigationBar}
  }
</script>
