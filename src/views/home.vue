<template>
  <div class="home">
    <section class="bg">
      <nav-header :isHome="true"></nav-header>
      <div class="bg-pipe">
        <img class="bg-pipe-b" src="../assets/images/pipe-m.png"/>
        <img class="bg-pipe-s" src="../assets/images/pipe-m-s.png"/>
      </div>
      <div class="bg-introduce">{{$t('jimdb.home.introduce')}}</div>
      <div class="bg-introduce-sub">{{$t('jimdb.home.subIntroduce')}}</div>
      <div class="bg-quick">
        <a class="bg-quick-btn mid-block started" href="https://github.com/jimdb-org/jimdb/issues" target="_blank">{{$t('jimdb.nav.started')}}</a>
        <a class="bg-quick-btn mid-block download" href="https://twitter.com/jimdb" target="_blank">{{$t('jimdb.nav.download')}}</a>
        <a class="bg-quick-btn mid-block mail" href="https://jimdb.slack.com" target="_blank">{{$t('jimdb.nav.mail')}}</a>
      </div>
    </section>
    <!-- home content -->
    <div class="content">
      <div class="con_flow">
        <h4>{{$t('jimdb.home.features.title')}}</h4>
        <div class="con_layer">
          <ul>
            <li>
              <div class="center-wrap"><img src="../assets/images/1.png" alt=""></div>
              <div class="center-wrap"><span>{{$t('jimdb.home.features.apis')}}</span></div>
              <p>{{$t('jimdb.home.features.apisP1')}}</p>
              <p>{{$t('jimdb.home.features.apisP2')}}</p>
              <p>{{$t('jimdb.home.features.apisP3')}}</p>
            </li>
            <li>
              <div class="center-wrap"><img src="../assets/images/2.png" alt=""></div>
              <div class="center-wrap"><span>{{$t('jimdb.home.features.highly')}}</span></div>
              <p>{{$t('jimdb.home.features.highlyP1')}}</p>
              <p>{{$t('jimdb.home.features.highlyP2')}}</p>
              <p>{{$t('jimdb.home.features.highlyP3')}}</p>
            </li>
            <li>
              <div class="center-wrap"><img src="../assets/images/3.png" alt=""></div>
              <div class="center-wrap"><span>{{$t('jimdb.home.features.storageTiers')}}</span></div>
              <p>{{$t('jimdb.home.features.storageTiersP1')}}</p>
            </li>
            <li>
              <div class="center-wrap"><img src="../assets/images/4.png" class="wh" alt=""></div>
              <div class="center-wrap"><span>{{$t('jimdb.home.features.transactions')}}</span></div>
              <p>{{$t('jimdb.home.features.transactionsP1')}}</p>
              <p>{{$t('jimdb.home.features.transactionsP2')}}</p>
            </li>
            <li>
              <div class="center-wrap"><img src="../assets/images/5.png" alt=""></div>
              <div class="center-wrap"><span>{{$t('jimdb.home.features.cloud')}}</span></div>
              <p>{{$t('jimdb.home.features.cloudP1')}}</p>
            </li>
            <li>
              <div class="center-wrap"><img src="../assets/images/6.png" alt=""></div>
              <div class="center-wrap"><span>{{$t('jimdb.home.features.manage')}}</span></div>
              <p>{{$t('jimdb.home.features.manageP1')}}</p>
              <p>{{$t('jimdb.home.features.manageP2')}}</p>
              <p>{{$t('jimdb.home.features.manageP3')}}</p>
            </li>
          </ul>
        </div>

      </div>
      <div class="con_system">
        <h4>System Architecture</h4>
        <div class="con_archi">
          <ul>
            <li>
              <div class="center-wrap"><span>proxy</span></div>
              <p>Handle user SQL client access</p>
              <p>Analysis of SQL, logical optimization and  physical optimization Read and write data to data node</p>
              <div class="center-wrap center-img"><img src="../assets/images/7.png" alt=""></div>
            </li>
            <li>
              <div class="center-wrap"><span>dataserver</span></div>
              <p>Data storage node</p>
              <p>Slice by range, raft three copies</p>
              <p>The storage engine uses masstree and rocksdb two types</p>
              <div class="center-wrap center-img"><img src="../assets/images/8.png" alt=""></div>
            </li>
            <li>
              <div class="center-wrap"><span>master</span></div>
              <p>Metadata management</p>
              <p>Cluster coordination </p>
              <P>Multiple nodes deploy built-in etcd to ensure themselves High availability</p>
              <div class="center-wrap center-img"><img src="../assets/images/9.png" alt=""></div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <!-- nav footer -->
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './common/NavHeader.vue'
import NavFooter from './common/NavFooter.vue'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
  }
}
</script>

<style scoped>
  .bg {
    position: relative;
    background: linear-gradient(226deg, rgba(160,91,253,1) 0%, rgba(4,247,233,1) 100%);
  }
  .bg-pipe {
    text-align: right;
  }
  .bg-pipe img {
    width: 100%;
  }
  .bg-introduce {
    position: absolute;
    left: 0;
    top: 24.848%;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 85px;
    line-height: 1.2em;
    color: rgba(255,255,255,1);
  }
  .bg-introduce-sub {
    position: absolute;
    left: 0;
    top: 45%;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    line-height: 1.2em;
    color: rgba(255,255,255,1);
  }
  .bg-quick {
    position: absolute;
    width: 100%;
    top: 74.242%;
    text-align: center;
  }
  .bg-quick-btn {
    border: 1px solid #fff; /*no*/
    border-radius: 20px; /*no*/
    width: 220px;
    height: 58px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0;
    line-height: 58px;
    background-repeat: no-repeat;
    background-position: 30px center;
    background-size: 20px;
    text-indent: 20px;
    color: #fff;
  }
  .bg-quick-btn:hover{
    color: #3F4BA9;
  }
  .started {
    background-image: url("../assets/images/triangle-white.png");
  }
  .download {
    background-image: url("../assets/images/download-white.png");
  }
  .mail {
    background-image: url("../assets/images/mail-white.png");
  }
  .started:hover {
    background-image: url("../assets/images/triangle-blue.png");
  }
  .download:hover {
    background-image: url("../assets/images/download-blue.png");
  }
  .mail:hover {
    background-image: url("../assets/images/mail-blue.png");
  }
  @media screen and (max-width: 568px) {
    .bg-introduce {
      font-size: 50px;
    }
    .bg-introduce-sub {
      font-size: 36px;
    }
    .bg-quick-btn {
      background-position: 15px center;
      text-indent: 30px;
      font-size: 12px;
    }
  }

  .content {
    width: 1380px;
    margin: 100px auto 0;
    background-image: url("../assets/images/dots.png");
    background-repeat: no-repeat;
    background-size: 329px;
    background-position: left 100px;
    font-size: 14px; /*no*/
  }

  .con_flow {
    background-image: url("../assets/images/dots.png");
    background-repeat: no-repeat;
    background-size: 329px;
    background-position: right bottom;
    padding: 20px 10px; /*no*/
  }

  .content h4 {
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px; /*no*/
  }
  .con_layer {
    background: rgba(255,255,255,1);
    border-radius: 12px; /*no*/
    box-shadow: 0px 3px 49px 0px rgba(0,0,0,0.1); /*no*/
  }
  .con_layer ul {
    display: flex;
    flex-wrap: wrap;
  }
  .con_layer li {
    flex: 1;
    flex-basis: 33%;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 30px 20px;
  }
  .con_layer .center-wrap{
    text-align: center;
  }
  .con_layer img {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  .con_layer span {
    font-weight: bold;
    color: #0036CC;
    line-height: 30px; /*no*/
  }
  .con_layer p{
    text-align: center;
    line-height: 20px; /*no*/
  }
  .con_layer p:before{
    display: inline-block;
    vertical-align: middle;
    width: 2px; /*no*/
    height: 2px; /*no*/
    margin-right: 10px; /*no*/
    background: #676767;
    content: '';
  }
  .con_system {
    margin-top: 60px;
  }
  .con_archi {
    background: rgba(255,255,255,1);
  }
  .con_archi ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .con_archi  li {
    flex: 1;
    flex-basis: 32%;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    background: rgba(255,255,255,1);
    border: 1px solid rgba(155,155,155,1);
    border-radius: 12px;
    padding: 50px 20px 230px;
    position: relative;
  }
  .con_archi .center-wrap{
    text-align: center;
  }
  .con_archi .center-img{
    position: absolute;
    bottom: 30px;
    left: 50%;
    margin-left: -135px;
  }
  .con_archi img {
    width: 269px;
    height: 166px;
    margin: 0 auto;
  }
  .con_archi span {
    font-weight: bold;
    color: #0036CC;
    font-size: 16px; /*no*/
    line-height: 30px; /*no*/
  }
  .con_archi p{
    text-align: center;
    line-height: 20px; /*no*/
  }
  .con_archi p:before{
    display: inline-block;
    vertical-align: middle;
    width: 2px; /*no*/
    height: 2px; /*no*/
    margin-right: 10px; /*no*/
    background: #676767;
    content: '';
  }
  .bg-pipe-s{
    display: none;
  }
  @media screen and (max-width: 1380px) {
    .content{
      width: 100%;
    }
    .bg-pipe-b{
      display: block;
    }
    .bg-pipe-s{
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    .bg-introduce {
      top: 35%;
    }
    .bg-introduce-sub {
      font-size: 22px; /*no*/
      font-weight: normal;
      top: 55%;
    }
    .bg-pipe-b{
      display: block;
    }
    .bg-pipe-s{
      display: none;
    }

  }
  @media screen and (max-width: 752px) {
    .bg-introduce {
      font-size: 65px;
    }

    .bg-quick{
      top: 80%;
    }
  }
  @media screen and (max-width: 568px) {
    .bg-introduce {
      font-size: 50px;
    }
    .bg-introduce-sub {
      font-size: 14px; /*no*/
      font-weight: normal;
      top: 55%;
    }
    .con_layer li {
      flex-basis: 50%;
    }
    .con_archi  li {
      flex-basis: 100%;
    }
    .bg-quick{
      top: 78%;
    }
    .bg-quick-btn {
      background-position: 15px center;
      text-indent: 30px;
      font-size: 12px;
    }
    .bg-pipe-b{
      display: none;
    }
    .bg-pipe-s{
      display: block;
    }
  }

</style>
