<template>

    <div class="pd-wrap">
      <!-- <div class="pd-wrap-head">
            <img src="~@/static/images/logo.png" class="pd-logo" />
            <ul class="pd-menu">
                <li><a href="">决策支撑</a></li>
                <li class="on"><a href="">综合分析</a></li>
                <li><a href="">一废一档</a></li>
            </ul>
            <div class="pd-airtime"><em>20℃</em><i>2019-09-18</i></div>
      </div>-->

      <!--9-29-->
      <div class="gd-content-header">
        <ul>
          <li :class="{on: OnIndex===0}" @click="OnClick(0)">
            <i class="icon-a"></i>产废分析
          </li>
          <li :class="{on: OnIndex===1}" @click="OnClick(1)">
            <i class="icon-b"></i>转移分析
          </li>
          <li :class="{on: OnIndex===2}" @click="OnClick(2)">
            <i class="icon-c"></i>经营分析
          </li>
          <li :class="{on: OnIndex===3}" @click="OnClick(3)">
            <i class="icon-d"></i>贮存分析
          </li>
          <li :class="{on: OnIndex===4}" @click="OnClick(4)">
            <i class="icon-e"></i>预警分析
          </li>
          <li :class="{on: OnIndex===5}" @click="OnClick(5)">
            <i class="icon-f"></i>KPI分析
          </li>
          <li :class="{on: OnIndex===6}" @click="OnClick(6)">
            <i class="icon-g"></i>行业分析
          </li>
          <li :class="{on: OnIndex===7}" @click="OnClick(7)">
            <i class="icon-h"></i>废物分析
          </li>
        </ul>
           <!-- 产废物分析 -->
      <div class="gd-content clearfix" v-if="OnIndex===0">
        <div class="gd-content-left fl">
          <div class="gd-content-box row">
            <div class="col col-4">
              <div class="gd-box-item">
                <h2>主要产废城市及企业分布分析</h2>
                <div class="gd-title">
                  截止至今，全省危险废物产生总量共
                  <b>250万吨</b>，
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart-a.png" alt />
                </div>
              </div>
            </div>
            <div class="col col-4">
              <div class="gd-box-item">
                <h2>主要产废城市及企业分布分析</h2>
                <div class="gd-title">
                  截止至今，全省共有
                  <b>53148家</b>危险废物产生企业
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart-b.png" alt />
                </div>
              </div>
            </div>
            <div class="col col-4">
              <div class="gd-box-item">
                <h2>产废量逐月变化分析</h2>
                <div class="gd-title">
                  截止至今，全省逐月危险废物产生整体呈
                  <span>上升</span>趋势
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart-f.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="gap"></div>
          <div class="gap"></div>
          <div class="gd-content-box row">
            <div class="col col-4">
              <div class="gd-box-item">
                <h2>主要产废种类分析</h2>
                <div class="gd-title">
                  截止至今，全省
                  <b>前10类</b>危废产生量较为集中，
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart-c.png" alt />
                </div>
              </div>
            </div>
            <div class="col col-4">
              <div class="gd-box-item">
                <h2>主要产废种类分析</h2>
                <div class="gd-title">
                  截止至今，全省危废产废排名
                  <b>前10类</b>的危
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart-d.png" alt />
                </div>
              </div>
            </div>
            <div class="col col-4">
              <div class="gd-box-item">
                <h2>产废去向情况分析</h2>
                <div class="gd-title">
                  截止至今，全省危废产废总体利用处置
                  <b>150万吨</b>，
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart-e.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gd-content-right fr">
          <div class="gd-content-right-list fx-right-list">
            <ul>
              <li class="on">广东省</li>
              <li>广州市</li>
              <li>深圳市</li>
              <li>珠海市</li>
              <li>汕头市</li>
              <li>佛山市</li>
              <li>韶关市</li>
              <li>肇庆市</li>
              <li>江门市</li>
              <li>茂名市</li>
              <li>惠州市</li>
              <li>梅州市</li>
              <li>汕尾市</li>
              <li>河源市</li>
              <li>阳江市</li>
              <li>清远市</li>
              <li>东莞市</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 预警分析 -->
      <div class="gd-content clearfix" v-if="OnIndex===4">
        <div class="gd-content-left fl">
          <div class="gd-content-box row">
            <div class="col col-6">
              <div class="gd-box-item bg3">
                <h2 class="rel">
                  主要产废城市及企业分布分析
                  <ul class="pd-tbs1">
                    <li class="on">全年</li>
                    <li>本月</li>
                  </ul>
                </h2>
                <div class="gd-title pd">
                  截止至今，全省共发生预警
                  <b>1000次</b>。
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart1a.png" alt />
                </div>
              </div>
            </div>
            <div class="col col-6">
              <div class="gd-box-item bg3">
                <h2>预警变化趋势</h2>
                <div class="gd-title pd">
                  截止至今，全省共发生预警
                  <b>1000次</b>。
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart2a.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="gap"></div>
          <div class="gap"></div>
          <div class="gd-content-box row">
            <div class="col col-6">
              <div class="gd-box-item bg3">
                <h2>预警类型趋势分析</h2>
                <div class="gd-title pd">
                  截止至今，全省共发生预警
                  <b>1000次</b>。
                </div>
                <div class="gd-item-img">
                  <img src="~@/static/images/chart3a.png" alt />
                </div>
              </div>
            </div>
            <div class="col col-6">
              <div class="gd-box-item bg3">
                <h2>实时预警信息</h2>
                <div class="gap"></div>
                <div class="gap"></div>
                <div class="pd-tablebx">
                  <table cellpadding="0" class="pd-table1 otr">
                    <thead>
                      <tr>
                        <td>预警时间</td>
                        <td>企业名称</td>
                        <td>行政规划</td>
                        <td>转移量(吨)</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东第一建筑公司</td>
                        <td>广州市</td>
                        <td>经营单位超标符合预警</td>
                      </tr>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东装饰材料有限公司</td>
                        <td>东莞市</td>
                        <td>违法违规车辆识别预警</td>
                      </tr>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东烟花爆竹公司</td>
                        <td>佛山市</td>
                        <td>转移量异常预警</td>
                      </tr>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东爆破公司</td>
                        <td>深圳市</td>
                        <td>数据超标预警</td>
                      </tr>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东煤矿公司</td>
                        <td>广州市</td>
                        <td>经营单位超标符合预警</td>
                      </tr>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东装饰材料有限公司</td>
                        <td>东莞市</td>
                        <td>违法违规车辆识别预警</td>
                      </tr>
                      <tr>
                        <td>2019-08-29 09:20</td>
                        <td>广东第一建筑公司</td>
                        <td>佛山市</td>
                        <td>违法违规车辆识别预警</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gd-content-right fr">
          <div class="gd-content-right-list fx-right-list">
            <ul>
              <li class="on">广东省</li>
              <li>广州市</li>
              <li>深圳市</li>
              <li>珠海市</li>
              <li>汕头市</li>
              <li>佛山市</li>
              <li>韶关市</li>
              <li>肇庆市</li>
              <li>江门市</li>
              <li>茂名市</li>
              <li>惠州市</li>
              <li>梅州市</li>
              <li>汕尾市</li>
              <li>河源市</li>
              <li>阳江市</li>
              <li>清远市</li>
              <li>东莞市</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
   
       <!-- 废物分析 -->
       	<div class="gd-content clearfix" v-if="OnIndex===7">
            <div class="gd-content-left fl">
           
                <div class="gd-content-box row">
                    <div class="col col-4">
                        <div class="gd-box-item">
                            <h2>主要产废城市及企业分布分析</h2>
                            <div class="gd-title">
                                近年来，产废量呈逐年上升趋势。
                            </div>
                            <div class="gd-item-img">
                                <img src="~@/static/images/char1a.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col col-4">
                        <div class="gd-box-item">
                            <h2>经营方式分析</h2>
                            <div class="gd-title">
                                经营方式中，排在第一位的是<b>利用</b>，共<b>276.3万吨</b>。
                            </div>
                            <div class="gd-item-img">
                                <img src="~@/static/images/char2a.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col col-4">
                        <div class="gd-box-item">
                            <h2>经营能力分析</h2>
                            <div class="gd-title">
                                截止至今，设计经营能力<b>80万吨</b>，核准经营能力。
                            </div>
                            <div class="gd-item-img">
                                <img src="~@/static/images/char3a.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gap"></div><div class="gap"></div>
                <div class="gd-content-box row">
                    <div class="col col-12">
                        <div class="gd-box-item bg2">
                            <h2>综合分析</h2>
                            <div class="gd-title pd">
                                截止至今，产生量<b class="blu">50吨</b>，上年贮存量<b class="blu">50吨</b>，跨省转入量<b class="blu">50吨</b>，跨省转出量<b class="blu">50吨</b>，现有废物总量<b class="blu">50吨</b>，设计经营能力<b class="blu">50吨</b>.
                            </div>
                            <div class="gd-item-img">
                                <img src="~@/static/images/char4a.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gd-content-right fr">
                <div class="gd-content-right-list otr">
                	<h1>废物大类</h1>
                    <div class="pd-selectmod on">
                        <p>HW22<i></i></p>
                        <ul>
                            <li class="on">HW23</li>
                            <li>HW24</li>
                        </ul>
                    </div>
                    <div class="gap"></div>
                    <div class="pd-selectmod">
                        <p>请选择<i></i></p>
                        <ul>
                            <li class="on">请选择</li>
                            <li>请选择1</li>
                        </ul>
                    </div>
                    <div class="gap" style="height: 50px;"></div>
                    <button type="button" class="btn">确认</button>
                </div>
            </div>
		</div>
      
    </div>

</template>

<script>
export default {
  name: "Analyse",
  data() {
    return {
      OnIndex: 0 //导航标题点击下标
    };
  },
  methods: {
    OnClick(OnIndex) {
      this.OnIndex = OnIndex;
    }
  }
};
</script>

<style>
</style>