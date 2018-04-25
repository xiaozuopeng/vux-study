<template>
  <tabbar @on-index-change="onIndexChange">
    <tabbar-item
      v-for="item in bottomBar"
      :link="item.link"
      :selected="item.selected">
      <img slot="icon" :src="item.icon_normal">
      <img slot="icon-active" :src="item.icon_active">
      <span
        slot="label">
				{{item.name}}
			</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    props: [],
    data() {
      return {
        bottomBar: [
          {
            name: '首页',
            icon_normal: require('../assets/images/tab_home_normal.png'),
            icon_active: require('../assets/images/tab_home_selected.png'),
            link: 'home',
            selected: true
          },
          {
            name: '排行',
            icon_normal: require('../assets/images/tab_ranking_normal.png'),
            icon_active: require('../assets/images/tab_ranking_selected.png'),
            link: 'ranking'
          },
          {
            name: '发布',
            icon_normal: require('../assets/images/tab_publish_normal.png'),
            icon_active: require('../assets/images/tab_publish_selected.png'),
            link: 'publish'
          },
          {
            name: '关于',
            icon_normal: require('../assets/images/tab_about_normal.png'),
            icon_active: require('../assets/images/tab_about_selected.png'),
            link: 'about'
          }
        ]
      }
    },
    methods: {
      onIndexChange(newIndex, oldIndex) {
        console.log(newIndex, oldIndex);
        console.log(this.bottomBar[newIndex])
      }
    }
  }
</script>
