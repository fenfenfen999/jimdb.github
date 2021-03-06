import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './locales/zh.js'
import en from './locales/en.js'
Vue.use(VueI18n)

const matchArr = window.location.href.match(/#\/(zh|en)/)
const urlLang = matchArr && matchArr[1]
// let navigatorLang = window.navigator.language.slice(0, 2)
// if (['en', 'zh'].indexOf(navigatorLang) <= -1) {
//   navigatorLang = ''
// }

const userLang = urlLang || window.localStorage.getItem('jimdb-language') || 'en' // || navigatorLang

const i18n = new VueI18n({
  locale: userLang,
  fallbackLocale: 'en',
  messages: {
    en: Object.assign(en, enLocale),
    zh: Object.assign(zh, zhLocale)
  }
})

locale.i18n((key, value) => i18n.t(key, value)) // 为了实现element插件的多语言切换

export default i18n
