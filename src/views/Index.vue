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
import Hero from "@/components/pages/whyWeExist/Hero";
import AdvisorSupport from "@/components/pages/whyWeExist/AdvisorSupport";
import WhatHowWhy from "@/components/pages/whyWeExist/WhatHowWhy";
import WhoWeAre from "@/components/pages/whyWeExist/WhoWeAre";
import Footer from "@/components/layout/Footer";
export default {
name: "Index",
  components: {Footer, WhoWeAre, WhatHowWhy, AdvisorSupport, Hero}
}
</script>

<style scoped>

</style>
