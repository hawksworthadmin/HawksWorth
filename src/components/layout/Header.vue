<template>
  <div>
    <div class="flex md:hidden lg:hidden pl-7 pt-8">
      <img src="@/assets/img/humburger.svg" class="mr-6" @click="showMobileNav=!showMobileNav"/>
      <div class="w-28 h-6 bg-white flex justify-center items-center">
        <img src="@/assets/img/logo.svg" alt="">
      </div>

    </div>
    <MobileSideNav :show-mobile-nav="showMobileNav" @close-nav="showMobileNav=false" ></MobileSideNav>
  <div class="lg:flex md:flex hidden header-text lato header-style fixed right-0 left-0 z-2">
      <div class="w-28 h-6 bg-white flex justify-center items-center">
        <img src="@/assets/img/logo.svg" alt="">
      </div>
    <div class="flex justify-evenly w-2/5 tracking-wide text-xs  font-black">
      <router-link to="/"><p>WHY WE EXIST</p></router-link>
      <router-link to="/hawksworth/how"><p>HOW WE WORK</p></router-link>
      <p>WHAT WE DO</p>

    </div>
    <div class="flex font-semibold text-xs">
      <HireButton></HireButton>
      <div class="border rounded-sm border-white py-2 px-5 ">
        <p>JOIN US</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import HireButton from "@/components/pages/whyWeExist/HireButton";
import MobileSideNav from "@/components/layout/MobileSideNav";
export default {
name: "Header",
  components: {MobileSideNav, HireButton},
  data(){
      return{
        showMobileNav:false
      }
  }
}
</script>

<style scoped>
.link{
  border: 2px solid #D5AF36;
}

</style>
