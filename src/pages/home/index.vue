<template>
  <div class="home">
    <div class="g-header-container"></div>
    <div></div>
    <div class="g-backtop-container">asdasd</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.home {
 overflow:hidden;width:100%;height:100%;background-color: $bgc-theme;
}
</style>
