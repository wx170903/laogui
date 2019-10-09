<template>
  <div id="app">
    <div class="pd-wrap">
      <img src="~@/static/images/logo.png" class="pd-logo"/>
      <ul class="pd-menu">
        
        <router-link to="/" replace>
          <li :class="{on: OnIndex===0}" @click="OnClick(0)">
            <a href="javascript:void(0);">决策支撑</a>
          </li>
        </router-link>
        
        <router-link to="/Analyse" replace>
          <li :class="{on: OnIndex===1}" @click="OnClick(1)">
            <a href="javascript:void(0);">综合分析</a>
          </li>
        </router-link>
        
        <router-link to="/Record" replace>
          <li :class="{on: OnIndex===2}" @click="OnClick(2)">
            <a href="javascript:void(0);">一废一档</a>
          </li>
        </router-link>
      
      </ul>
      <div class="pd-airtime">
        <em>20℃</em>
        <i>2019-09-18</i>
      </div>
      <div class="pd-selcmod" v-if='OnIndex===0'>
        <div class="pd-slecbox fl">
          <p class="sic1" @click="showSel">本年</p>
          <ul v-show="IsShow">
            <li>本年</li>
            <li>本季</li>
            <li>本月</li>
            <li>实时</li>
          </ul>
        </div>
        <div class="pd-slecbox fr">
          <p class="sic2">广东省</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  
  export default {
    name: "app",
    data() {
      return {
        OnIndex: 0, //头部导航标题点击下标
        IsShow: false,
      }
    },
    created() {
      if(this.$router.path !== '/'){//刷新浏览器储存值
        if(localStorage.getItem('activeIndex')) {
          this.OnIndex = Number(localStorage.getItem('activeIndex'));
        }
      }
    },
    methods: {
      OnClick(OnIndex) {
        this.OnIndex = OnIndex
      },
      showSel() {
        this.IsShow = !this.IsShow
      }
    },
    watch:{
      OnIndex(val) {//监听OnIndex,刷新浏览器tab重新赋值
        localStorage.setItem('activeIndex', val);
      }
    }
  };
</script>

<style lang="less">
  /*@import "~@/styles/common";*/
  #app {
    width: 1920px;
    height: 1080px;
    position: relative;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
