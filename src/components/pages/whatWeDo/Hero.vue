<template>
  <div id="box" class="blue hero-class  relative">
    <Header/>
    <div class="flex flex-col items-center justify-center" style="margin: 0 auto;">
      <div id="what-hero" class=" text-white pt-28 px-8 lg:px-0 lg:pt-44">
        <h2 class="lg:text-7xl text-5xl" style=" font-family:Fulgate, serif; ">Knowledge & <br/>Service <span class="lato text-base">We deliver unrivalled insight across all development sectors</span></h2>

      </div>
      <div class="lg:mb-36 mb-20 mt-12 lg:mt-20" style="border: 1px solid rgba(244, 245, 247, 0.8); width: 780px;"></div>
      <div class="flex justify-between flex-col px-8 lg:px-0 lg:flex-row alliance-text-width lg:w-3/4">
        <img src="@/assets/img/plant.svg" data-src="@/assets/img/plant.svg" class="lazyload"/>
        <div class="mt-3">
          <div class="lato lg:ml-40">
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
      <div class="flex justify-evenly flex-col px-8 lg:px-0 lg:flex-row z-10 alliance-text-width lg:w-3/4 md:w-3/4 lato lg:mt-28 mt-6 mb-52">
        <div class="w-4/5 mt-3 lg:w-full pr-4">

          <h4 class="gold-color mt-5 font-black">HUMAN RESOURCE</h4>
          <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
            and private equity  globally – providing creative mix of advisory,
            investment, research and design services.
          </p>
        </div>
        <div class="pr-4 w-4/5 mt-5 lg:w-full">
          <h4 class="gold-color font-black">FINANCE</h4>
          <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
            and private equity globally – providing creative mix of advisory,
            investment, research and design services.
          </p>
        </div>
        <div class="pr-4 w-4/5 mt-5 lg:w-full">
          <h4 class="gold-color font-black">INCUBATE</h4>
          <p class="text-gray-300 font-medium text-sm">We partner with government agencies, companies, communities
            and private equity  globally – providing creative mix of advisory,
            investment, research and design services.
          </p>
        </div>

        </div>

      </div>
    <div class="slant"></div>

    </div>
</template>

<script>
import Header from "@/components/layout/Header";
import {gsap} from "gsap";
export default {
  name: "Hero",
  components: {Header},
  mounted() {
    gsap.from("#what-hero", 1, {
      scale: 0.1,
      y: 60,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        grid: "auto",
        from: "center"
      }
    });
  }
}
</script>

<style scoped>
#box {
/*  width: 30em;*/
/*  height: 6em;*/
  border-radius: 20px;
/*  background-color: #fff;*/
/*  position: relative;*/
}

#box::before,
#box::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  border-color: #2B3367;
  border-style: solid;
  transform: rotate(90deg)

}

/* #box::before {
    border-width: 1.5em;
    border-right-color: #ccc;
    border-top-color: #ccc;
} */

#box::after {
  border-radius: 0.4em;
  border-width: 12.35em;
  border-right-color: white;
  border-top-color: white;
}
@media screen and  (min-width: 1024px) and (max-width: 1374px) {
  .alliance-text-width {
    width: 85%;
  }
}


</style>
