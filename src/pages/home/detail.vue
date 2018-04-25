<template>
  <div class="detail-page">
    <div>
      <span>{{msg}}</span>
    </div>
  </div>
</template>

<script>
  require('./detail.less');
  import {Group, Cell} from 'vux'

  export default {
    components: {
      Group,
      Cell
    },
    data() {
      return {
        msg: '详情'
      }
    }
  }
</script>
