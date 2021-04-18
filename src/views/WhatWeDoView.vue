<template>
<div>
  <Hero/>
  <ExpertiseAssessment/>
  <Portfolio/>
  <OurTeam/>
  <Footer/>
</div>
</template>

<script>
import Hero from "@/components/pages/whatWeDo/Hero";
import ExpertiseAssessment from "@/components/pages/whatWeDo/ExpertiseService";
import Portfolio from "@/components/pages/whatWeDo/Portfolio";
import OurTeam from "@/components/pages/whatWeDo/OurTeam";
import Footer from "@/components/layout/Footer";
export default {
name: "WhatWeDoView",
  components: {Footer, OurTeam, Portfolio, ExpertiseAssessment, Hero}
}
</script>

<style scoped>

</style>
