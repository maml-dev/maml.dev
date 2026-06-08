import DefaultTheme from 'vitepress/theme'
import Playground from '../components/Playground.vue'
import MamlHero from './MamlHero.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Playground', Playground)
    app.component('MamlHero', MamlHero)
  },
}
