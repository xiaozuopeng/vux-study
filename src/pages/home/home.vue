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
  import Api from '../../utils/http/api'

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
      },

      getData() {
        Api.getUserList().then((Response) => {
          if (Response) {
            console.log('-----------11111111', Response)
          }
        });
      }
    },
    created() {
      this.getData();
    },
    mounted() {

    }
  }
</script>
