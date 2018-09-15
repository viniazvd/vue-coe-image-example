<template>
  <div id="#app">
    <vue-coe-image
      :src="src"
      fallback="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
    />
    <button @click="changeImage">coe</button>
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