<template>
  <div id="app">
    <transition name="slither">
    <router-view/>
    </transition>
  </div>
</template>
<script>
  export default {
    mounted() {
      window.addEventListener('scroll', this.changeHeaderColor)
    },
    methods:{
      changeHeaderColor(){
        const header = document.querySelector("header");
        console.log(header)
        const app_container = document.querySelector('.hero-class')
        const sectionObserver = new IntersectionObserver(((entries) => {
          console.log(entries)
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              header.classList.add("nav-color")
            } else header.classList.remove("nav-color")
          })
        }), {threshold: .1})

        sectionObserver.observe(app_container)
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.changeHeaderColor)
    }
  }
</script>
<style>
@font-face {
  font-family: "Fulgate";
  src: local("Fulgate-Medium"),
  url(./font/Fulgate-Medium/Fulgate-Medium.ttf) format("truetype");
}
/*.slither-enter-active, .slither-leave-active {*/
/*  transition: transform 0.5s;*/
/*}*/

/*.slither-enter, .slither-leave-to {*/
/*  transform: translateX(-100%);*/
/*}*/

/*.slither-enter-to, .slither-leave {*/
/*  transform: translateX(0);*/
/*}*/
.nav-color{
  background:#2B3367;
  z-index: 2;
}

.hooper-indicator.is-active{
  background-color: #d5af36;
}
</style>
