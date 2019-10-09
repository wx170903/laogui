<template>
  <div ref="box">
    <div class="pd-sider lt">
      <div class="pd-moduhd clearfix">
        <span>目标进展</span>
        <i class="reftime">截止至2019-08-06</i>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-tithd clearfix">
        <span>危险废物安全处置率</span>
        <ul class="pd-utbs1 fr">
          <li class="on">危险废物</li>
          <li>医疗废物</li>
        </ul>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-data1">
        <div class="row">
          <div class="col col-4">
            <h2>目标</h2>
            <p>99%</p>
          </div>
          <div class="col col-4">
            <h2>调用数</h2>
            <p>92.1%</p>
          </div>
          <div class="col col-4">
            <h2>距目标差距</h2>
            <p>92.1%</p>
          </div>
        </div>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-sldbx">
        <div class="pd-tithd clearfix">
        <span>“无废城市”建设指标</span>
         <div  class="pd-selGD fl"  >
           <div class="Pbox">
            <img src="~@/static/images/dzic.png" alt="">
               <p class="sic1" @click="showSel">区域：{{cityActive}}</p>
           </div>
          <ul v-show='IsShow'>
            <li v-for="item in cityList" @click="selectCity(item)">{{item}}</li>
          </ul>
        </div >
        <div class="swiper-pagination"></div>
        </div>
        <swiper class="pd-lstbd swiperA" :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <ul>
              
              <li class="LBrow">
                
                <span >工业固废产生强度
                   <!-- <img src="~@/static/images/u3042.png" alt=""> -->
                </span>
                <i>1.21</i>
               
              </li>
               
              <li>
                <span>般工业固废利用率</span>
                <i>92.3%</i>
              </li>
              
              <li>
                <span>危险废物利用率</span>
                <i>84.5%</i>
              </li>
              <li>
                <span>工业危废安全处置量</span>
                <i>120 吨</i>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul>
              <li>
                <span>工业固废产生强度1</span>
                <i>1.21</i>
              </li>
              <li>
                <span>般工业固废利用率</span>
                <i>92.3%</i>
              </li>
              <li>
                <span>危险废物利用率</span>
                <i>84.5%</i>
              </li>
              <li>
                <span>工业危废安全处置量</span>
                <i>120 吨</i>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-moduhd clearfix">
        <span>企业一栏</span>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-ccbx">
        <div class="row">
          <div class="col col-4">
            <h2 class="cc1">
              <b>6.62</b>
              <i>万家</i>
            </h2>
            <p>固废企业</p>
          </div>
          <div class="col col-4">
            <h2 class="cc2">
              <b>5.1</b>
              <i>万家</i>
            </h2>
            <p>危废产生单位</p>
          </div>
          <div class="col col-4">
            <h2 class="cc3">
              <b>118</b>
              <i>家</i>
            </h2>
            <p>危废经营单位</p>
          </div>
        </div>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-moduhd clearfix">
        <span>排名情况</span>
        <ul class="pd-utbs1 fr">
          <li class="on">产废排名</li>
          <li>产废排名</li>
          <li>产废排名</li>
        </ul>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-chartxt">危废产生排名及同比变化（万吨）</div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="gap"></div>
      <swiper class="pd-lstbd swiperA danger" :options="swiperOption2" ref="mySwiper">
        <swiper-slide>
          <img src="~@/static/images/char4.png" class="db auto" />
        </swiper-slide>
        <!--<swiper-slide>-->
        <!--  <img src="~@/static/images/char4.png" class="db auto" />-->
        <!--</swiper-slide>-->
      </swiper>
    </div>
    <div class="pd-sider rt">
      <div class="pd-moduhd clearfix">
        <span>产废分析</span>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-chartxt">近年危废产生量变化趋势（万吨）</div>
      <div class="gap"></div>
      <div class="gap"></div>
      <img src="~@/static/images/char5.png" class="db auto" />
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-moduhd clearfix">
        <span>转移分析</span>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-chartxt">近年危废转移量及去向分析（万吨）</div>
      <div class="gap"></div>
      <div class="gap"></div>
      <img src="~@/static/images/char6.png" class="db auto" />
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-moduhd clearfix">
        <span>处置分析</span>
        <ul class="pd-utbs1 fr">
          <li>综合分析</li>
          <li class="on">处置分析</li>
        </ul>
      </div>
      <div class="gap"></div>
      <div class="gap"></div>
      <div class="pd-chartxt">近年危废处置核准量及实际处置量分析（万吨）</div>
      <div class="gap"></div>
      <div class="gap"></div>
      <img src="~@/static/images/char7.png" class="db auto" />
    </div>
    <div class="pd-midmap">
      <div class="pd-sldbx">
        <div class="pd-tithd clearfix">
          <span style="padding-left: 35px;">危险废物（万吨）</span>
           <div class="swiper-pagination"></div>
          <ul class="hd">
            <!-- <li class="on"></li> -->
            <!-- <li></li> -->
          </ul>
        </div>
        <div class="gap"></div>
        <div class="gap"></div>
        <swiper class="pd-lstbd swiperA" :options="swiperOption" ref="mySwiper">
          <swiper-slide>
          <div class="pd-data2">
            <div class="row">
              <div class="col col-3">
                <h2>产生量</h2>
                <h3>
                  <sub>391.2</sub>
                </h3>
                <h4>
                  同比
                  <i class="up">10.3%</i>
                </h4>
              </div>
              <div class="col col-3">
                <h2>设计处置能力</h2>
                <h3>
                  <sub>525.3</sub>
                </h3>
                <h4>
                  同比
                  <i class="dwn">10.3%</i>
                </h4>
              </div>
              <div class="col col-3">
                <h2>核准经营能力</h2>
                <h3>
                  <sub>500.3</sub>
                </h3>
                <h4>
                  同比
                  <i class="up">10.3%</i>
                </h4>
              </div>
              <div class="col col-3">
                <h2>在建处置能力</h2>
                <h3>
                  <sub>350.8</sub>
                </h3>
                <h4>
                  同比
                  <i class="up">10.3%</i>
                </h4>
              </div>
            </div>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div class="pd-data2">
            <div class="row">
              <div class="col col-3">
                <h2>产生量1</h2>
                <h3>
                  <sub>391.2</sub>
                </h3>
                <h4>
                  同比
                  <i class="up">10.3%</i>
                </h4>
              </div>
              <div class="col col-3">
                <h2>设计处置能力</h2>
                <h3>
                  <sub>525.3</sub>
                </h3>
                <h4>
                  同比
                  <i class="dwn">10.3%</i>
                </h4>
              </div>
              <div class="col col-3">
                <h2>核准经营能力</h2>
                <h3>
                  <sub>500.3</sub>
                </h3>
                <h4>
                  同比
                  <i class="up">10.3%</i>
                </h4>
              </div>
              <div class="col col-3">
                <h2>在建处置能力</h2>
                <h3>
                  <sub>350.8</sub>
                </h3>
                <h4>
                  同比
                  <i class="up">10.3%</i>
                </h4>
              </div>
            </div>
          </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="gap" style="height: 100px;"></div>
      <div class="pd-srhmod">
        <input type="text" class="srhtxt" placeholder="请输入企业名称" />
      </div>
      <ul class="pd-ulbtn1 otr">
        <li class="on">热立图</li>
        <li>统计图</li>
      </ul>
      <ul class="pd-ulbtn2">
        <li class="on">
          危废企业
          <i></i>
          <ul>
            <li class="on">年产废1000吨以上企业</li>
            <li>年产废100-1000段企业</li>
            <li>年产废10-100吨企业</li>
            <li>年产废1-10吨企业</li>
            <li>年产废1吨及以下企业</li>
          </ul>
        </li>
        <li>
          产废单位
          <i></i>
          <ul>
            <li class="on">产废单位企业</li>
            <li>产废单位1-10段企业</li>
            <li>产废单位10-100吨企业</li>
            <li>产废单位1-10吨企业</li>
            <li>产废单位1吨及以下企业</li>
          </ul>
        </li>
        <li>经营单位</li>
        <li>视频监控单位</li>
      </ul>
      <div class="pd-slecbox bg">
        <p class="sic3">废物统计</p>
      </div>
      <img src="~@/static/images/map3.png" class="abs" style="left: 0;top: 290px;" />
      <img src="~@/static/images/tl3.png" class="abs" style="right: 0; bottom: 0;" />
    </div>
    <!-- 点位效果 -->
    <div class="pd-pinac red" style="left: 50%; top: 50%;">
      <p>800.5万吨</p>
      <div class="st-dw-trans">
        <span class="st-dw-trans-a"></span>
        <span class="st-dw-trans-b"></span>
        <span class="st-dw-trans-c"></span>
      </div>
    </div>
    <div class="pd-pinac grn" style="left: 60%; top: 60%;">
      <p>55.1万吨</p>
      <div class="st-dw-trans">
        <span class="st-dw-trans-a"></span>
        <span class="st-dw-trans-b"></span>
        <span class="st-dw-trans-c"></span>
      </div>
    </div>
    <div class="pd-pinac ylw" style="left: 50%; top: 70%;">
      <p>55.1万吨</p>
      <div class="st-dw-trans">
        <span class="st-dw-trans-a"></span>
        <span class="st-dw-trans-b"></span>
        <span class="st-dw-trans-c"></span>
      </div>
    </div>
    <div class="pd-pinac plu" style="left: 65%; top: 50%;">
      <p>1047.1万吨</p>
      <div class="st-dw-trans">
        <span class="st-dw-trans-a"></span>
        <span class="st-dw-trans-b"></span>
        <span class="st-dw-trans-c"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Decision",
  data() {
    return {
      cityList:['广东省','广州市','深圳市'],
      swiperOption: {
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        loop:true
      },
      swiperOption2: {
        direction : 'vertical',//垂直
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop:true
      },
      IsShow:false,  //多选下拉显示
      cityActive:"广东省"
    };
  },
  created() {
    document.addEventListener('click',(e)=>{
      console.log(e.target.getAttribute('class'));
      if(e.target.getAttribute('class') !== 'sic1'){
          this.IsShow = false
      }
    })
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    showSel() {
      // this.active.display=this.active.display=== 'none' ? '' :'block'
      this.IsShow=!this.IsShow //多选下拉显示
      
    },
    selectCity(active) {
      event.preventDefault()
      this.cityActive = active;
      this.IsShow=!this.IsShow
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // this.swiper.slideTo(3, 1000);
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
</style>