<template>
  <div class="flex justify-center flex-wrap items-center  lg:w-4/5 w-full"  style="min-width: 100%">
    <div v-for="(data,i) in details" :key="i"  class="lg:mr-12 mt-20 w-full lg:w-4/12">
      <h5 class=" text-white" style="font-family: Fulgate,serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 153%; margin-bottom: 5px">{{data.title}}</h5>
      <span class="lato text-base text-gray-400 font-black">
              {{data.msg}}
            </span>

    </div>
  </div>
</template>

<script>
export default {
name: "PortfolioText",
  props:{
  details:[Array]
  }
}
</script>

<style scoped>

</style>
