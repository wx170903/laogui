import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper) //轮播图
import 'swiper/css/swiper.css'
import '@/styles/common.less'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app');