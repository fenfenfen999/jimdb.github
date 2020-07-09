<template>
  <div>
    <nav-header :isHome="false"></nav-header>
    <main class="community">
      <h2>Community</h2>
      <p class="sub-title mb30">
        JIMDB is development in the open. We welcome more contributors join us.
        Here are some of channels we use to communicate and contribute
      </p>
      <article class="article">
        <p class="mb30">
          <strong class="strong">Mailing list:</strong> <a href="javaScript:" @click="openEmail('jimdb@groups.io')">jimdb@groups.io</a> – discussion around JIMDB usage, community support and developer discussion.
        </p>
        <p class="mb30">
          <strong class="strong">Slack: </strong><a href="https://jimdb.slack.com" target="_blank">jimdb.slack.com</a>
        </p>
        <p class="mb30">
          <strong class="strong">Twitter: </strong><a href="https://twitter.com/jimdb" target="_blank">@jimdb</a>
        </p>
        <p class="mb30">
          <strong class="strong">Issue tracker: </strong>Use the  <a href="https://github.com/jimdb-org/jimdb/issues" target="_blank">Github issue tracker</a>  to file bugs and features request. If you need support, please send your questions to the  <a  href="javaScript:" @click="openEmail('jimdb@groups.io')">jimdb@groups.io</a> mailing list rather than filing a GitHub issue.
        </p>
        <p class="mb30">
          <strong class="strong strong2">Contributing</strong><br>
          We welcome community contributions! If you are planning on making more elaborate or controversial changes, please discuss them on the mailing list or on <a href="https://github.com/jimdb-org/jimdb" target="_blank">GitHub</a> before sending a pull request.
        </p>
        <p class="mb30">
          <strong class="strong strong2">Project Governance</strong><br>
          JIMDB is an independent open-source project and not controlled by any single company. More details please refer to  <a href="https://github.com/jimdb-org/jimdb/issues/blob/master/GOVERNANCE.md" target="_blank">Governance.md</a>.
        </p>
        <p class="mb50">
          <strong class="strong strong2">Code of Conduct</strong><br>
          To make JIMDB a welcoming and harassment-free experience for everyone, we follow the <a href="https://github.com/cncf/foundation/blob/master/code-of-conduct.md" target="_blank"> CNCF Code of Conduct</a>.
        </p>
      </article>
    </main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './common/NavHeader.vue'
import NavFooter from './common/NavFooter.vue'

export default {
  name: 'community',
  resource: 'Community',
  components: {
    NavHeader,
    NavFooter
  },
  props: {
    post: String,
    author: String
  },
  data () {
    return {
    }
  },
  methods: {
    openEmail (addr) {
      parent.location.href = 'mailto:' + addr
    }
  },
  computed: {
  },

  watch: {
  },

  beforeMount () {
    // this.$getResource('blog')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.community {
  margin: 0 auto;
  width: 1380px;
  padding: 0 20px; /*no*/
  box-sizing: border-box;
  color: #292929;
  letter-spacing: 0;
  font-size: 14px; /*no*/
  mix-blend-mode: multiply;
}
.community h2{
  margin: 60px 0 30px;
  text-align: center;
  font-size: 20px; /*no*/
}
.community a{
  text-decoration: underline;
  color: #0036CC;
}
.mb30{
  margin-bottom: 30px; /*no*/
}
@media screen and (max-width: 1380px) {
  .community{
    width: 100%;
  }
}

</style>
