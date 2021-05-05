<template>
<div class="flex justify-between items-center px-8 lg:px-0 md:px-0 flex-wrap mt-8 icons-width md:w-7/12 lg:w-800 w-full " >
  <div v-for="(icon, i) in icons" :key="i" class="lg:mx-6 mx-3 lg:mt-20 text-center">
    <img :src="icon.src" alt="" draggable="false" class="mb-6 rotate-45 cursor-pointer"/>
    <span class="lato text-base text-gray-300 font-black" v-html="icon.name"></span>

  </div>

</div>
</template>

<script>
export default {
name: "ServicesIcons",
  data(){
      return{
        icons:[
          {
            src:require('@/assets/img/services/commercial.svg'),
            name:'Commercial <br> Evaluation'
          },
          {
            src:require('@/assets/img/services/robotics.svg'),
            name:"Robotic Process <br> Automation"
          }, {
            src:require('@/assets/img/services/investing.svg'),
            name:'Investing for <br> Development'
          }, {
            src:require('@/assets/img/services/inclusive.svg'),
            name:'Inclusive Growth'
          },
          {
            src:require('@/assets/img/services/data.svg'),
            name:'Data Analytics <br> Strategy Training'
          }, {
            src:require('@/assets/img/services/digital.svg'),
            name:'Digital <br> Transformation'
          },
          {
            src:require('@/assets/img/services/organization.svg'),
            name:'Organizational <br> Effectiveness'
          },
          {
            src:require('@/assets/img/services/economic.svg'),
            name:'Economic Policy<br> Development & <br> Advocacy'
          },
          {
            src:require('@/assets/img/services/cyber.svg'),
            name:'Cyber Security<br> Advisory'
          },
          {
            src:require('@/assets/img/services/goto.svg'),
            name:'Go-to-Market <br>Strategy'
          },
          {
            src:require('@/assets/img/services/program.svg'),
            name:'Programme Design &  <br> Implementation'
          },
          {
            src:require('@/assets/img/services/innovation.svg'),
            name:'Innovation & <br>Entrepreneurship Advisory'
          },

        ]
      }
  }
}
</script>

<style scoped>
@media screen and  (min-width: 1024px) and (max-width: 1374px) {
  .icons-width {
    width: 82%;
  }
}


</style>
