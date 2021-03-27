<template>
  <div class="hero-img hero-class">
      <Header/>
    <div class="hero-wrapper">
    <div class="hero-text pt-24 lg:pt-60 md:pt-60">
      <h2>OUR GREATEST RESOURCE IS <span class="gold-color">KNOWLEDGE</span>.</h2>
    </div>
    <div class="text-center lato font-medium text-white mt-4" >
      <h5>Hawksworth Advisors strategic advisory firm combines the best of private
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
  components: {HireButton, Header}
}
</script>

<style scoped>

</style>
