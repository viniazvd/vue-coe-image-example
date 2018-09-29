<template>
  <div id="#app" class="app">
    <h3>open the network in the browser to see dynamic image loading</h3>
    <vue-coe-image
      class="coe"
      :src="src"
      fallback="https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916"
    />

    <oee
      class="coe2"
      src="https://img.freepik.com/free-photo/man-jumping-over-impossible-or-possible-over-cliff-on-sunset-background-business-concept-idea_1323-266.jpg?size=338&ext=jpg"
      placeholder="https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916"
    />
    <button class="coe" @click="changeImage">coe</button>
  </div>
</template>

<script>
// import VueCoeImage from 'vue-coe-image'
import VueCoeImage from './lib'
import oee from './lib/oee.vue'

export default {
  components: { VueCoeImage, oee },

  data () {
    return {
      src: 'https://image.shutterstock.com/image-photo/business-success-leadership-achievement-people-260nw-411972601.jpg'
    }
  },

  // mounted () {
  //   setTimeout(() => {
  //     this.src = 'https://pbs.twimg.com/profile_images/1017516299143041024/fLFdcGsl_400x400.jpg'
  //   }, 2000)
  // },

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

.coe2 {
  position: absolute;
  bottom: 10px;
  max-width: 200px;
  max-height: 200px;
  right: 20px;
}
</style>
