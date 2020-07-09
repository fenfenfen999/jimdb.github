<template>
  <transition appear name="v--mask">
  <footer class="footer">
    <div class="footer-main">
      <div class="menu-list">
        <a class="menu-list-item" :href="'https://jimdb.readthedocs.io/' + lang + '/latest'" target="_blank">{{$t('jimdb.nav.docs')}}</a>
        <router-link class="menu-list-item" :to="'/blogs'">{{$t('jimdb.nav.blogs')}}</router-link>
        <router-link class="menu-list-item" :to="'/community'">{{$t('jimdb.nav.community')}}</router-link>
      </div>
      <div class="link-list">
        <a href="https://github.com/jimdb-org/jimdb/issues" target="_blank" class="github-footer"><img src="../../assets/images/github-logo.png"/></a>
        <a href="https://twitter.com/jimdb" target="_blank" class="twitter-footer"><img src="../../assets/images/Twitter-logo.png"/>
        </a>
        <a href="https://jimdb.slack.com" target="_blank" class="slack-footer"><img src="../../assets/images/slack-logo.png"/></a>
      </div>
    </div>
    <p class="footer-copy">&copy;2020 The JIMDB Authors</p>
  </footer>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'my-footer',
  computed: {
    ...mapGetters([
      'lang'
    ])
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #000;
  color: #fff;
}
.footer-main {
  width: 1380px;
  margin: 0 auto;
}
.menu-list{
  padding-left: 150px;
  width: auto;
  display: inline-block;
}
.menu-list-item {
  display: block;
  font-size: 30px; /*np*/
  font-weight: bold;
  line-height: 66px;
}

.link-list{
  display: block;
  float: right;
  margin-top: 50px;
}
.github-footer,
.twitter-footer,
.slack-footer{
  margin-right: 30px;
}
.github-footer img{
  width: 120px;
}
.twitter-footer img{
  width: 120px;
}
.slack-footer img{
  width: 120px;
 }
.footer-copy {
  margin-top: 20px;
  text-align: center;
  font-size: 12px; /*no*/
  color: rgba(255, 255, 255, .7);
}
@media screen and (max-width: 1380px) {
  .footer-main {
    width: 100%;
  }
}
</style>
