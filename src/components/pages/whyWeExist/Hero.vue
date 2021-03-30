<template>
  <div class="hero-img hero-class">
      <Header/>
    <div class="hero-wrapper">
    <div class="hero-text pt-24 lg:pt-60 md:pt-60">
      <h2 data-aos="zoom-in">OUR GREATEST RESOURCE IS <span class="gold-color">KNOWLEDGE</span>.</h2>
    </div>
    <div class="text-center lato font-medium text-white mt-4" >
      <h5  data-aos="fade-down"  data-aos-delay="250">Hawksworth Advisors strategic advisory firm combines the best of private
        sector strategy skills and rigorous analytical capabilities along with
        deep knowledge and networks across emerging and frontier markets with
        special focus on Africa.
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
export default {
name: "Hero",
  components: {HireButton, Header},
  mounted() {
    const header = document.querySelector(".header-text");
    console.log(header)
    const app_container = document.querySelector('.hero-class')
    const sectionObserver = new IntersectionObserver(((entries) => {
      console.log(entries)
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.style.background = '#2B3367'
        } else header.style.background = "transparent"
      })
    }), {threshold: .1})

    sectionObserver.observe(app_container)
  },
  methods:{
    changeHeaderColor(){

    }
  }
}
</script>

<style scoped>

</style>
