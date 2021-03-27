<template>
<div class="w-full flex  items-center justify-center" style="margin: 0 auto">
  <div class="flex flex-col lg:flex-row mb-40">
    <img src="@/assets/img/map.png" class="mr-4" width="300px"/>
    <div class="w-394 pt-25 px-8 lg:px-0">
      <h5 class="blue-color lato font-black text-lg">Why We Do It:</h5>
      <br>
      <p class=" text-base text-gray-700  lato pb-6 ">
        The ‘’Why’’ behind our work. We believe in pragmatic optimism,
        in the value and potential of our work to drive change and impact people,
        eliminate forces holding back human prosperity. Our work uncovers opportunities,
        builds momentum and actualize the potentials in people and communities around the world.
      </p>
      <div class="flex font-semibold text-xs">
        <HireButton class="text-white"/>
        <div class="border rounded-sm border-black py-2 px-5 ">
          <p class="blue-color">JOIN US</p>
        </div>
      </div>
    </div>

  </div>

</div>
</template>

<script>
import HireButton from "@/components/pages/whyWeExist/HireButton";
export default {
name: "WhoWeAre",
  components: {HireButton}
}
</script>

<style scoped>

</style>
