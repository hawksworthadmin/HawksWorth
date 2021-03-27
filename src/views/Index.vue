<template>
  <div>
    <Hero></Hero>
    <AdvisorSupport></AdvisorSupport>
    <WhatHowWhy/>
    <WhoWeAre/>
    <Footer/>

  </div>
</template>

<script>
import Hero from "@/components/pages/Hero";
import AdvisorSupport from "@/components/pages/AdvisorSupport";
import WhatHowWhy from "@/components/pages/WhatHowWhy";
import WhoWeAre from "@/components/pages/WhoWeAre";
import Footer from "@/components/layout/Footer";
export default {
name: "Index",
  components: {Footer, WhoWeAre, WhatHowWhy, AdvisorSupport, Hero}
}
</script>

<style scoped>

</style>
