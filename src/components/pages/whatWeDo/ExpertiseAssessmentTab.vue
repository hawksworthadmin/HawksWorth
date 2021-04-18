<template>
  <div class="mt-8  mb-20 flex justify-center items-center flex-col">
    <div class="flex justify-between lg:w-80 md:w-80 w-4/5">
      <div v-for="(tab,i) in tabs" :key="i" :style="[active === tab.name?{color:'#D5AF36'}:{color:'#C4C4C4'}]">
        <h2 class="expertise-tab cursor-pointer" @click="active = tab.name">{{tab.name}}<br/>
          {{tab.title}}</h2>
        <div :class="{tabBorder:active === tab.name}"></div>
      </div>
    </div>
      <transition name="slide-fade">
      <ExpertiseIcons v-show="active==='Expertise Areas:'"/>
      </transition>
    <transition name="slide-fade">
      <ExpertiseIcons v-show="active==='Service Lines:'"/>
    </transition>


  </div>
</template>

<script>
import ExpertiseIcons from "@/components/pages/whatWeDo/ExpertiseIcons";
export default {
name: "ExpertiseAssessmentTab",
  components: {ExpertiseIcons},
  data(){
    return{
      tabs:[
        {
          name:"Expertise Areas:",
          title:'what we know',

        },
        {
          name:"Service Lines:",
          title:'what we do',


        }

      ],
      active:"Expertise Areas:"
    }
  }
}
</script>

<style scoped>
.tabBorder{
  width: 57px;
  height: 3px;
  background: #D5AF36;
  border-radius: 23px;
  margin:auto
}

</style>
