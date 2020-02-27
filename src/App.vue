<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <c-tab-bar></c-tab-bar>
    </div>
  </div>
</template>

<script>
import CTabBar from "components/tabbar";
export default {
  name: "App",
  components: {
    CTabBar
  }
};
</script>
<style lang="scss"></style>
