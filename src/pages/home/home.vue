<template>
  <div class="home-page" :style="{height:getContentHeight}">
    <div>
      <span>首页</span>
      <button @click="jump">跳转</button>
    </div>
  </div>
</template>

<script>
  require('./home.less');
  import {Group, Cell} from 'vux'

  export default {
    components: {
      Group,
      Cell
    },
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    computed: {
      getContentHeight() {
        return this.$store.getters.getContentHeight;
      }
    },
    methods: {
      jump() {
        this.$router.push('/detail')
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>
