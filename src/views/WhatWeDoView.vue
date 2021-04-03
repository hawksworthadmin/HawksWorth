<template>
<div>
  <Hero/>
  <ExpertiseAssessment/>
  <Portfolio/>
</div>
</template>

<script>
import Hero from "@/components/pages/whatWeDo/Hero";
import ExpertiseAssessment from "@/components/pages/whatWeDo/ExpertiseService";
import Portfolio from "@/components/pages/whatWeDo/Portfolio";
export default {
name: "WhatWeDoView",
  components: {Portfolio, ExpertiseAssessment, Hero}
}
</script>

<style scoped>

</style>
