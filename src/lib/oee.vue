<template>
  <img
    v-bind="$attrs"
    :src="image"
    :style="{ backgroundImage: isBackground ? `url(${image})` : 'none' }"
    class="c-image"
  >
</template>

<script>
export default {
  props: {
    src: String,
    placeholder: {
      type: String,
      default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtTDP76SEZF3lZA--lb5mjUst7e1r3rDmJALBfeP1JQEnO2oXjg'
    },
    loaderImage: {
      type: String,
      default: 'https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'
    },
    isBackground: Boolean
  },

  data () {
    return {
      image: null,
      virtualImage: null,
      status: null
    }
  },

  watch: {
    src () { this.status = 'loading' },
    status (val) {
      switch (val) {
      case 'loading': this.setImage(); break
      case 'loaded': this.image = this.virtualImage.src; break
      case 'error': this.image = this.placeholder; break
      }
    }
  },

  methods: {
    setImage () {
      this.image = this.loaderImage
      this.virtualImage = new Image()
      this.virtualImage.src = this.src || this.placeholder

      this.virtualImage.onload = () => { this.status = 'loaded' }
      this.virtualImage.onerror = () => { this.status = 'error' }
    }
  },

  created () { this.status = 'loading' }
}
</script>

<style lang="css">
.c-image {
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
