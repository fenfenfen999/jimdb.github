<template>
  <div class="bg-content">
    <nav-header :isHome="true"></nav-header>
    <section class="blogs">
      <div class="blogs-post">
          <div class="title">
          {{ detail.title }}
          <div class="sub">
            <span class="left">{{detail.stitle}}</span>
            <span class="right">{{detail.displayDate | formatTime}}</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="content" v-html="detail.comments"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import http from '@/utils/http.js'
import { scrollTo, kebabify, prettyDate } from '@/utils/assist.js'
import NavHeader from '../common/NavHeader.vue'

export default {
  name: 'BlogFeed',
  components: {
    NavHeader
  },
  data () {
    return {
      postId: this.$route.params.id,
      detail: {},
      commentsReady: false
    }
  },
  watch: {
    post (to, from) {
      if (to === from || !this.post) return
      this.commentsReady = false
      this.$getResource('post', to)
        .then(this.showComments)
    }
  },

  computed: {
    ...mapGetters([
      'lang'
    ])
  },
  methods: {
    scrollTo,
    kebabify,
    prettyDate,
    showComments () {
      setTimeout(() => {
        this.commentsReady = true
      }, 1000)
    },
    getNewsDetail () {
      this.loading = true
      http.get('/content/getNewsDetail', {
        id: this.postId,
        typeId: 'Hy97Xvb2S'
      })
        .then(res => {
          if (res.state === 'success') {
            this.detail = res.news
          }
        })
        .catch(() => {
        })
    }
  },
  mounted () {
    this.getNewsDetail()
  }
}
</script>
<style scoped>
.blogs {
  margin: 0 auto;
  width: 1380px;
  padding: 0 20px; /*no*/
  box-sizing: border-box;
  color: #292929;
  letter-spacing: 0;
  font-size: 14px; /*no*/
}
.blogs-post{
  margin-top: 60px;
  background: rgba(255,255,255,1);
  border-radius: 12px; /*no*/
  box-shadow: 0px 3px 49px 0px rgba(0,0,0,0.1); /*no*/
  padding: 30px;
}
.blogs h2{
  text-align: center;
  font-size: 20px; /*no*/
}
.blogs .title {
  margin-top: 20px; /*no*/
  font-size: 20px; /*no*/
  line-height: 30px; /*no*/
}
.blogs .line {
  border-bottom: 1px solid #ccc; /*no*/
  margin: 10px 0; /*no*/
}
.blogs .sub {
  margin-top: 10px; /*no*/
  font-size: 14px; /*no*/
}
.blogs .right{
  font-size: 12px; /*no*/
  float: right;
}
.blogs .content{
  line-height: 30px; /*no*/
}
.blogs a{
  color: #0036CC;
}

@media screen and (max-width: 1380px) {
  .blogs{
    width: 100%;
  }
}
</style>
