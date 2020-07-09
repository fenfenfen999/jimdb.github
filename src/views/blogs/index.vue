<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <div class="blog__feed">
      <router-view></router-view>
      <!--<blog-feed :filters="filters"/>-->
      <!--<blog-post :post="post"/>-->
    </div>
    <nav-footer></nav-footer>
  </main>
</template>

<script>
import NavFooter from '../common/NavFooter.vue'

export default {
  name: 'blogs',
  components: {
    NavFooter
  },
  resource: 'Blogs',
  props: {
    post: String,
    author: String
  },

  data () {
    return {
      navs: 0,
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },

  computed: {
    content () {
      return {title: this.title, labels: this.labels}
    },
    filters () {
      let filters = {}
      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author
      return filters
    }
  },
  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },
  beforeMount () {
    // this.$getResource('blog')
  }
}
</script>

<style lang="scss">
  .post__body {
    ul {
      list-style-type: none !important;
    }

    img {
      width: auto !important;
      height: auto !important;
    }
  }
  .blog {
    .dui-pagination__item--active {
      color: #fff !important;
      border-color: #4E4E4E !important;
      background-color: #4E4E4E !important;
    }

    .dui-pagination__total {
      font-size: .14rem !important;
    }
  }
</style>
