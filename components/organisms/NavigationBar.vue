<template>
  <b-navbar class="navigation-bar is-primary">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }">N-shield
        <span>夜のお店と人を守る検索データベース</span>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
  export default {
    name: 'NavigationBar'
  }
</script>
<style lang="sass" scoped>
</style>
