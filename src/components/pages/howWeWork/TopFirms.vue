<template>
  <div class="-mt-16 gray-margin lg:mb-32  mb-16  pb-8" style="box-shadow: 0px 24px 25px rgba(244, 245, 247, 0.27);border-radius: 11px; background: #FFFFFF;">
    <h3 class="text-center">Trusted by Top firms</h3>
    <div class="flex justify-between px-7 lg:px-0 lg:flex-row flex-wrap items-center w-full lg:w-800 md:w-800" style="margin: 0 auto;">
      <div class="mb-12" v-for="(image,i) in imageList" :key="i">
        <img :src="image.src" alt="" class="lg:mr-8 md:mr-8 mr-8"/>

      </div>
    </div>

</div>
</template>

<script>
export default {
name: "TopFirms",
  data(){
  return{
    imageList:[
      {
        src:require('@/assets/img/firm/world.svg')
      },
      {
        src:require('@/assets/img/firm/generation.svg')
      },
      {
        src:require('@/assets/img/firm/pattern.svg')
      },
      {
        src:require('@/assets/img/firm/USAID.svg')
      },
      {
        src:require('@/assets/img/firm/group.svg')
      },
      {
        src:require('@/assets/img/firm/ON.svg')
      },
      {
        src:require('@/assets/img/firm/gate.svg')
      },
      {
        src:require('@/assets/img/firm/master.svg')
      },
      {
        src:require('@/assets/img/firm/giz.svg')
      },
      {
        src:require('@/assets/img/firm/ford.svg')
      },
      {
        src:require('@/assets/img/firm/first.svg')
      },
      {
        src:require('@/assets/img/firm/union.svg')
      },
      {
        src:require('@/assets/img/firm/gt.svg')
      },
      {
        src:require('@/assets/img/firm/Stanbic.svg')
      },
      {
        src:require('@/assets/img/firm/interswitch.svg')
      },
      {
        src:require('@/assets/img/firm/uba.svg')
      },
      {
        src:require('@/assets/img/firm/access.svg')
      },
      {
        src:require('@/assets/img/firm/central.svg')
      },
      {
        src:require('@/assets/img/firm/American.svg')
      },
      {
        src:require('@/assets/img/firm/DfID 1department.svg')
      },

    ]
  }
  }
}
</script>

<style scoped>
h3{
  font-family: Fulgate,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 131.5%;
  padding-top: 28px;
  margin-bottom: 36px;
  color: #66757F;
}

</style>
