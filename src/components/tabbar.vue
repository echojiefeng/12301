<template>
  <div class="m-tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="less" scoped>
  .m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.05rem;
    background: #fff;
    padding-top: 0.05rem;
      z-index: 99999999999;
    border-top: 0.01rem solid #ccc;
  }
</style>
