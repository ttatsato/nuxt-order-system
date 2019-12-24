<template>
  <b-navbar
    fixed-top
    class="navigation-bar">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }">ガスト 上野店
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            @click="$router.push('/order_history')"
            class="button is-primary">
            <strong>ご注文履歴</strong>
          </a>
          <a
            @click="$router.push('/check')"
            class="button is-primary">
            <strong>退出</strong>
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
.navigation-bar
  background: rgba(0, 0, 0, 0.8)
  color: #ffffff
  & a
    color: #ffffff
</style>
