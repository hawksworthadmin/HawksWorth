<template>
<div class="flex justify-between flex-wrap mt-8" style="width: 810px">
  <div v-for="(icon, i) in icons" :key="i" class="mr-12 mt-20">
    <img :src="icon.src" alt="" draggable="false" class="mb-6 rotate-45 cursor-pointer"/>
    <span class="lato text-base text-gray-300 font-black" v-html="icon.name"></span>

  </div>

</div>
</template>

<script>
export default {
name: "ExpertiseIcons",
  data(){
      return{
        icons:[
          {
            src:require('@/assets/img/expertise/human.svg'),
            name:'Human Capital<br> Development'
          },
          {
            src:require('@/assets/img/expertise/innovation.svg'),
            name:'Innovation'
          }, {
            src:require('@/assets/img/expertise/energy.svg'),
            name:'Access to Energy'
          }, {
            src:require('@/assets/img/expertise/agric.svg'),
            name:'Agriculture & <br> Food Security'
          },
          {
            src:require('@/assets/img/expertise/climate.svg'),
            name:'Environment & <br> Climate'
          }, {
            src:require('@/assets/img/expertise/health.svg'),
            name:'Health and <br> Nutrition'
          },
          {
            src:require('@/assets/img/expertise/human.svg'),
            name:'4iR Advisory'
          },
          {
            src:require('@/assets/img/expertise/business.svg'),
            name:'Inclusive Business'
          },
          {
            src:require('@/assets/img/expertise/infrastructure.svg'),
            name:'Infrastructure'
          },
          {
            src:require('@/assets/img/expertise/financial.svg'),
            name:'Financial Inclusion'
          },

        ]
      }
  }
}
</script>

<style scoped>

</style>
