<template>
  <div class="lg:mb-44 md:mb-44 mb-24 px-4  lg:px-0">
    <div class="text-white hidden lg:block md:block fixed right-0 transform rotate-90">
      <HireButton :title="'CONTACT US'" class="mr-0"></HireButton>
    </div>
    <div class="flex justify-evenly flex-col lg:flex-row md:items-center lg:items-center w-full" style="margin: 0 auto">
      <div class="-mt-24 relative">
        <div class="country-card w-full md:w-454 lg:w-454 blue pt-24 pb-16 px-6 lg:px-16  text-white">
          <h4 class="text-xl lato font-extrabold">While indigenously African, we at home anywhere in Asia, the Americas,
            the Middle East, or Europe.</h4>
          <div style="width: 34px;border: 3px solid #D5AF36;" class="my-3"></div>
          <p class="text-base text-opacity-80 lato">We are young entrepreneurs, intrapreneurs, investors, strategists,
            innovators, designers, creative problem solvers, thinkers and doers, idealists and pragmatists.</p>
        </div>
        <div class="mt-14 lg:ml-6 md:ml-6 p-4 lg:p-0 md:w-394 lg:w-394 w-full">
          <p class=" text-base text-gray-700  lato ">Hawksworth Advisors supports businesses to:
            <br><br>
            Develop go-to-market strategy to unlocking economics of scale.
            Secure appropriate funding in grant, equity, debt, mezzanine necessary to scale operations.
            <br><br>
            Project manage strategy implementation to maximise returns.
            Evaluate acquisition opportunities for strategic fitness, minimize risks, and assure investment outcomes.
            <br><br>
            Streamline business processes to optimise operations, and
            Develop effective workforce programmes and capable management teams to ensuring long term sustainability.
          </p>
        </div>

      </div>
      <div class="lg:mt-40 md:mt-40 mt-24">
        <img src="@/assets/img/learning.png" alt="" width="370" height="460"/>

      </div>

    </div>
  </div>
</template>

<script>
import HireButton from "@/components/pages/whyWeExist/HireButton";

export default {
  name: "AdvisorSupport",
  components: {HireButton}
}
</script>

<style scoped>

</style>
