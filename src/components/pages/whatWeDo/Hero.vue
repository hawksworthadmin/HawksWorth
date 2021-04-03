<template>
  <div class="blue slant relative">
    <Header/>
    <div class="flex flex-col items-center justify-center" style="margin: 0 auto;">
      <div class=" text-white pt-44">
        <h2 class="text-7xl" style=" font-family:Fulgate, serif; ">Knowledge & <br/>Service <span class="lato text-base">We deliver unrivalled insight across all development sectors</span></h2>

      </div>
      <div class="mb-36 mt-20" style="border: 1px solid rgba(244, 245, 247, 0.8); width: 780px;"></div>
      <div class="flex justify-between w-3/4">
        <img src="@/assets/img/plant.svg"/>
        <div>
          <div class="lato ml-40">
            <h4 class="gold-color font-black">STRATEGY</h4>
            <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
              and private equity <br/> globally – providing creative mix of advisory,
              investment, research and design services.
            </p>
            <br/><br/>
            <h4 class="gold-color font-black">ACCELERATE</h4>
            <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
              and private equity<br/> globally – providing creative mix of advisory,
              investment, research and design services.
            </p>
            <br/><br/>
            <h4 class="gold-color font-black">OPERATIONS</h4>
            <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
              and private equity <br/> globally – providing creative mix of advisory,
              investment, research and design services.
            </p>

          </div>
        </div>

      </div>
      <div class="flex justify-evenly w-3/4 lato mt-28 mb-52">
        <div class=" pr-4">

          <h4 class="gold-color font-black">HUMAN RESOURCE</h4>
          <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
            and private equity  globally – providing creative mix of advisory,
            investment, research and design services.
          </p>
        </div>
        <div class="pr-4">
          <h4 class="gold-color font-black">FINANCE</h4>
          <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
            and private equity globally – providing creative mix of advisory,
            investment, research and design services.
          </p>
        </div>
        <div class="pr-4">
          <h4 class="gold-color font-black">INCUBATE</h4>
          <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
            and private equity  globally – providing creative mix of advisory,
            investment, research and design services.
          </p>
        </div>

        </div>

      </div>

    </div>
</template>

<script>
import Header from "@/components/layout/Header";
export default {
  name: "Hero",
  components: {Header}
}
</script>

<style scoped>
.slant:before {
  content: '';
  position: absolute;
  bottom: 0; right: 0;
  border-bottom: 380px solid white;
  border-left: 280px solid #2B3367;
  width: 0;
}


</style>
