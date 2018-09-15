<template>
  <div id="#app" class="app">
    <h3>open the network in the browser to see dynamic image loading</h3>
    <vue-coe-image
      class="coe"
      :src="src"
      fallback="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
    />
    <button class="coe" @click="changeImage">coe</button>
  </div>
</template>

<script>
import VueCoeImage from 'vue-coe-image'

export default {
  components: { VueCoeImage },

  data () {
    return {
      src: 'https://3.bp.blogspot.com/-PRG407gZ9bE/V0TCSHFQKcI/AAAAAAAADjE/KbkLmxIXcjMcx4hKTFnDSQxcdPqGuNNWwCLcB/s1600/flamengologo.png'
    }
  },

  methods: {
    changeImage () {
      this.src = 'https://www.urbanarts.com.br/imagens/produtos/065033/Detalhes/urubu-do-mengao.jpg'
    }
  }
}
</script>

<style scoped>
.app {
  position: relative;
  height: 2000px;
}
.coe {
  position: absolute;
  bottom: 10px;
  max-width: 200px;
  max-height: 200px;
}
</style>
