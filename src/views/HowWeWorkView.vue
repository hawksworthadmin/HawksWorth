<template>
<div>
  <Hero></Hero>
  <TopFirms/>
  <Footer/>
</div>
</template>

<script>
import Hero from "@/components/pages/howWeWork/Hero"
import TopFirms from "@/components/pages/howWeWork/TopFirms";
import Footer from "@/components/layout/Footer";
export default {
name: "HowWeWorkView",
  components: {Footer, TopFirms, Hero}
}
</script>

<style scoped>

</style>
