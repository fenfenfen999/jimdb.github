<template>
  <div class="bg-content">
    <nav-header  :isHome="true"></nav-header>
    <section class="blogs">
      <h2>The JIMDB Blog</h2>
      <transition-group tag="ul" :name="transition">
        <li v-for="post in posts" class="preview" :key="post.id">
          <transition name="v--fade">
            <router-link exact class="preview__card"
                         :to="`/blogs/post/${post.id}`"
                         @click.native="scrollTo(0, 220, 50)">
              <div class="title">
                {{ post.title }}
                <div class="sub">
                  <span class="left">{{post.stitle}}</span>
                  <span class="right">{{post.displayDate | formatTime}}</span>
                </div>
              </div>
              <div class="line"></div>
              <div class="content">
                {{ post.discription }}
              </div>
            </router-link>
          </transition>
        </li>
      </transition-group>
      <div class="news-page" v-if="total">
        <el-pagination
          class="fr"
          :total="total"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="pageSizes"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          show-total></el-pagination>
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
  props: {
    filters: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      posts: [],
      total: 0,
      currentPage: 1,
      pageSize: 100,
      pageSizes: [10, 20, 30, 50, 100],
      transition: 'preview-appear',
      loading: true
    }
  },

  watch: {
    pageSize (cur, old) {
      this.getNews()
    },
    currentPage (cur, old) {
      this.getNews()
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
    handleSizeChange (val) {
      this.pageSize = val
      this.getNews()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getNews()
    },
    getNews () {
      http.get('/content/getNewsList', {
        lang: this.lang,
        pageSize: this.pageSize,
        current: this.currentPage,
        typeId: 'Hy97Xvb2S'
      })
        .then(res => {
          if (res.state === 'success') {
            this.posts = res.news
            this.total = res.pageInfo.totalItems ? res.pageInfo.totalItems : 0
            this.transition = 'preview'
            console.log(this.total)
          }
        })
        .catch(() => {
        })
    }
  },
  mounted () {
    this.getNews()
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
.blogs h2{
  margin: 60px 0 30px;
  text-align: center;
  font-size: 20px; /*no*/
  color: #fff;
}
.blogs .title {
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
.blogs .preview {
  box-sizing: border-box;
  background: rgba(255,255,255,1);
  border-radius: 12px; /*no*/
  box-shadow: 0px 3px 49px 0px rgba(0,0,0,0.1); /*no*/
  padding: 30px 20px;
  margin-bottom: 30px;
  line-height: 30px; /*no*/
}
.news-page{
  margin-top: 50px; /*no*/
  overflow: hidden;
}
@media screen and (max-width: 1380px) {
  .blogs{
    width: 100%;
  }
}
</style>
