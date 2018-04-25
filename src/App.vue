<template>
  <div class="main-page">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <buttom-nav v-if="isShowTabbar"></buttom-nav>
    </div>
  </div>
</template>

<script>
  require('./assets/css/common.less');
  import {Loading, TransferDom} from 'vux'
  import ButtomNav from './components/BottomNav.vue'

  export default {
    components: {
      ButtomNav,
      Loading,
      TransferDom
    },
    directives: {
      TransferDom
    },
    data() {
      return {}
    },
    computed: {
      // ...mapState({
      //   isLoading: state => state.isLoading
      // })
      isLoading() {
        return this.$store.state.isLoading
      },
      isShowTabbar() {
        return /home|ranking|publish|about/.test(this.$route.path);
      }
    },
    methods: {},

  }
</script>
