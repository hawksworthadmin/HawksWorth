<template>
  <div class="hero-img lazyload hero-class">
      <Header/>
    <div class="hero-wrapper">
    <div class="hero-text pt-24 lg:pt-60 md:pt-60">
      <h2 id="great">OUR GREATEST RESOURCE <span class="gold-color">KNOWLEDGE</span>.</h2>
    </div>
    <div class="text-center lato font-medium text-white mt-4" >
      <h5 id="sub-great">Hawksworth Advisors strategic advisory firm combines the best of private
        sector strategy skills and rigorous analytical capabilities along with
        deep knowledge and networks across emerging and frontier markets with
        special focus on Africa and emerging global markets.
      </h5>
      <div class="mt-10 mx-auto" style="max-width: 230px">
        <HireButton/>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
import Header from "@/components/layout/Header";
import HireButton from "@/components/pages/whyWeExist/HireButton";
import { gsap } from "gsap";
export default {
name: "Hero",
  components: {HireButton, Header},
  // mounted() {
  // console.log('hi print')
  //   const header = document.querySelector("header");
  //   console.log(header)
  //   const app_container = document.querySelector('.hero-class')
  //   const sectionObserver = new IntersectionObserver(((entries) => {
  //     console.log(entries)
  //     entries.forEach(entry => {
  //       if (!entry.isIntersecting) {
  //         header.classList.add("nav-color")
  //       } else header.classList.remove("nav-color")
  //     })
  //   }), {threshold: 0.1})
  //
  //   sectionObserver.observe(app_container)
  // },
  // methods:{
  //   changeHeaderColor(){
  //
  //   }
  // },
  mounted() {
    gsap.from("#great", {duration: 2, x: 400, ease: "slow"});
    gsap.from("#sub-great", {duration: 3,opacity: 0,  x: -600, ease: "slow"});
  }
}
</script>

<style>
.nav-color{
  background:#2B3367;
  z-index: 2;
}

</style>
