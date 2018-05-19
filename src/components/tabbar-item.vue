<template>
  <a class="m-tabbar-item" :class="{'is-active':isActive}" @click="$parent.$emit('input',id)">
    <span class="m-tabbar-item-icon" v-show="!isActive"><slot  name="icon-normal"></slot></span>
    <span class="m-tabbar-item-icon" v-show="isActive"><slot  name="icon-active"></slot></span>
    <span class="m-tabbar-item-text"><slot></slot></span>
  </a>
</template>

<script>
export default{
  props: ['id', 'mainwidth'],
  computed: {
    isActive () {
      if (this.$parent.value === this.id) {
        // alert('/home/' + this.id)
        // this.$parent.$parent.stR.forward('/home/' + this.id)
        return true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .m-tabbar-item{
    height: 0.98rem;
    flex: 1;
    /*display: flex;*/
    /*flex-direction: column;*/
    justify-content: center;
    .m-tabbar-item-icon{
      display: block;
      padding-top: 0.05rem;
      img{
        width: 0.5rem;
        height: 0.5rem;
      }

    }
    .m-tabbar-item-text{
      display: block;
      margin-top: 0.02rem;
      font-size: 0.2rem;
      color:#999;
    }
    &.is-active{
      .m-tabbar-item-text{
        color: #24BFF2;
      }
    }

  }
</style>
