<template>
  <header :class="isHome ? 'home-header' : 'content-header'" id="header">
    <div class="logo">
      <img src="../../assets/images/logo.png"/>
    </div>
    <div class="nav-icon" @click="toggleNav">
      <i :class="isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
    </div>
    <div class="nav-menu">
      <router-link class="nav-menu-item" :to="'/'" @click="closeMenu">{{$t('jimdb.nav.home')}}</router-link>
      <a class="nav-menu-item" :href="'https://jimdb.readthedocs.io/' + lang + '/latest'" target="_blank" @click="closeMenu">{{$t('jimdb.nav.docs')}}</a>
      <router-link class="nav-menu-item" :to="'/blogs'" @click="closeMenu">{{$t('jimdb.nav.blogs')}}</router-link>
      <router-link class="nav-menu-item" :to="'/community'" @click="closeMenu">{{$t('jimdb.nav.community')}}</router-link>
      <div class="header-share-phone">
          <a class="mid-block" href="https://github.com/jimdb-org/jimdb/issues" target="_blank" @click="closeMenu"><img src="../../assets/images/github-logo.png"/></a>
          <a class="mid-block" href="https://twitter.com/jimdb" target="_blank" @click="closeMenu"><img src="../../assets/images/Twitter-logo.png"/></a>
          <a class="mid-block" href="https://jimdb.slack.com" target="_blank" @click="closeMenu"><img src="../../assets/images/slack-logo.png"/></a>
      </div>
    </div>
    <div class="header-share">
        <a class="mid-block" href="https://github.com/jimdb-org/jimdb/issues" target="_blank"><img src="../../assets/images/github.png"/></a>
        <a class="mid-block" href="https://twitter.com/jimdb" target="_blank"><img src="../../assets/images/Twitter.png"/></a>
        <a class="mid-block" href="https://jimdb.slack.com" target="_blank"><img src="../../assets/images/slack.png"/></a>
    </div>
    <div class="header-right">
      <div class="lang mid-block" @click="toggleLang">
        {{lang === 'en' ? 'Chinese' : '英文'}}
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavHeader',
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    isHome: Boolean
  },
  computed: {
    header () {
      return window.document.getElementById('header')
    },
    ...mapGetters([
      'lang'
    ])
  },
  methods: {
    toggleNav () {
      if (this.isOpen) {
        this.isOpen = false
        this.header.classList.remove('open')
      } else {
        this.isOpen = true
        this.header.classList.add('open')
      }
    },
    getLang () {
      const matchArr = window.location.href.match(/#\/(zh|en)/)
      const urlLang = matchArr && matchArr[1]
      // let navigatorLang = window.navigator.language.slice(0, 2)
      // if (['en', 'zh'].indexOf(navigatorLang) <= -1) {
      //   navigatorLang = ''
      // }
      const lang = urlLang || window.localStorage.getItem('jimdb-language') || 'en' // || navigatorLang
      this.$store.commit('setLang', lang)
    },
    toggleLang () {
      let lang = this.lang === 'en' ? 'zh' : 'en'
      window.localStorage.setItem('jimdb-language', lang)
      window.location.href = window.location.href.replace('/(en|zh)/', '/' + lang + '/')
    },
    closeMenu () {
      this.isOpen = false
      this.header.classList.remove('open')
    }
  },
  mounted () {
    this.getLang()
  }
}
</script>

<style scoped>
.home-header{
  width: 100%;
  height: 60px;
  font-size: 14px; /*no*/
  margin: 0 auto;
  color: #fff;
  padding-bottom: 2%;
}
.content-header{
  width: 100%;
  height: 60px;
  font-size: 14px; /*no*/
  margin: 0 auto;
  color: #fff;
  padding-bottom: 2%;
  background-color: #000;
}
.logo{
  position: absolute;
  top: 2%;
  left: 13.125%;
  font-weight: bold;
}
.logo img {
  width: 106px;
}
.header-right{
  position: absolute;
  top: 2%;
  right: 13.125%;
}

.header-right .lang{
  cursor: pointer;
  border: 1px dotted #fff; /*no*/
  padding: 0 3px; /*no*/
}
.header-share{
  position: absolute;
  top: 2%;
  left: 56.718%;
}
.header-share .mid-block{
  margin-left: 10px; /*no*/
  margin-right: 10px; /*no*/
}
.header-share-phone{
  display: none;
}
.nav-icon{
  display: none;
}
.nav-menu {
  position: absolute;
  left: 21.927%;
  top: 2%;
  z-index: 1;
  width: 30%;
}
.nav-menu-item {
  display: inline-block;
  margin-right: 4.27%;
}

.content-header .logo {
  top: 4%;
}
.content-header .header-right {
  top: 4%;
}
.content-header .nav-menu{
  top: 4%;
}
.content-header .lang {
  top: 4%;
}
.content-header .header-share{
  top: 4%;
}
@media screen and (max-width: 1068px) {
  .content-header .logo {
    top: 1.5%;
  }
  .content-header .header-right {
    top: 1.5%;
  }
  .content-header .nav-menu{
    top: 1.5%;
  }
  .content-header .lang {
    top: 1.5%;
  }
  .content-header .header-share{
    top: 1.5%;
  }
  .content-header .nav-icon{
    top: 1.5%;
  }
}
@media screen and (max-width: 567px) {
  .content-header .logo {
    top: 1%;
  }
  .content-header .header-right {
    top: 1%;
  }
  .content-header .nav-menu{
    top: 1%;
  }
  .content-header .lang {
    top: 1%;
  }
  .content-header .header-share{
    top: 1%;
  }
  .content-header .nav-icon{
    top: 1%;
  }
}
@media screen and (max-width: 567px) {
  .nav-icon{
    position: absolute;
    right: 20px; /*no*/
    top: 2%;
    display: block;
  }
  .nav-menu {
    display: none;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 80px;
    width: 100%;
    padding: 15px 0 15px 0; /*no*/
    box-sizing: border-box;
    background: #000;
    color: #fff;
  }
  .header .nav-menu {
    top: 100px;
  }
  .content-header .nav-menu {
    top: 80px;
  }
  .nav-menu-item {
    display: block;
    line-height: 40px; /*no*/
    text-indent: 13.125%;
  }
  .header-share{
    display: none;
  }
  .header-share-phone{
    display: block;
    margin-top: 10px; /*no*/
    padding: 0 13.125%;
  }
  .header-share-phone .mid-block {
    width: 30%;
    margin-right: 5px; /*no*/
  }
  .header-share-phone img{
    width: 100%;
    cursor: pointer;
   }
  .open .nav-menu {
    display: block;
  }
}
</style>
