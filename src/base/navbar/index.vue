<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left">
      <slot name="left" v-if="$slots.left"></slot>
    </div>
    <div class="mine-navbar-center">
      <slot name="center" v-if="$slots.center"></slot>
    </div>
    <div class="mine-navbar-right">
      <slot name="right" v-if="$slots.right"></slot>
    </div>
    <h1 class="mine-navbar-title" v-if="title">
      <span class="mine-navbar-text" v-text="title"></span>
    </h1>
  </div>
</template>
<script>
export default {
  name: "Me",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";

.mine-navbar {
  position: relative;
  @include flex-between();
  height: 50px;
  background-color: #fff;

  &-left {
    margin-left: 10px;

    ~ .mine-navbar-right {
      position: static;
    }
  }

  &-center {
    flex: 1;
    margin: 0 10px;
    text-align: center;
    ~ .mine-navbar-right {
      position: static;
    }
  }

  &-right {
    position: absolute;
    right: 0;
    @include flex-center();
    height: 100%;
    margin-right: 10px;
  }

  &-title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20%;
    right: 20%;
    @include flex-center();
    text-align: center;
  }
  &-text {
    width: 100%;
    font-size: 18px;
    text-align: center;
    line-height: 1.5;
    @include ellipsis();
  }
}
</style>
