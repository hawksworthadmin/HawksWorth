<template>
  <div>
    <div class="flex justify-between blue w-full items-center md:hidden lg:hidden  px-4 pt-6 pb-4 fixed z-2">
    <div class="flex">
      <img src="@/assets/img/hamburger.svg" width="20" height="15" class="mr-3 flex justify-center items-center" @click="showMobileNav=!showMobileNav"/>
      <div class="w-28 h-6 bg-white flex justify-center items-center" style="cursor: pointer" @click="goToHomePage">
        <img src="@/assets/img/logo.svg" alt="" >
      </div>
    </div>
    <div class="gold text-white rounded-sm cursor-pointer font-extrabold transform hover:scale-110 py-1  px-3">
      <p>Hire our team</p>
    </div>
    </div>
    <MobileSideNav class="md:hidden lg:hidden" :show-mobile-nav="showMobileNav" @close-nav="showMobileNav=false" ></MobileSideNav>
  <header class="lg:flex md:flex hidden header-text lato header-style fixed right-0 left-0 z-2">
      <div class="w-28 h-6 bg-white flex justify-center items-center" style="cursor: pointer" @click="goToHomePage">
        <img src="@/assets/img/logo.svg" alt="">
      </div>
    <div class="flex justify-evenly w-2/5 tracking-wide text-xs  font-black">
      <router-link to="/" class="transform hover:scale-110"><p>WHY WE EXIST</p></router-link>
      <router-link class="transform hover:scale-110" to="/hawksworth/how"><p>HOW WE WORK</p></router-link>
      <router-link class="transform hover:scale-110" to="/hawksworth/what"> <p>WHAT WE DO</p></router-link>

    </div>
    <div class="flex font-semibold text-xs">
      <HireButton></HireButton>
      <div class="border rounded-sm border-white cursor-pointer py-2 px-5 transform hover:scale-110 ">
        <a  class="no-underline" href="https://b0m8i3fwr7p.typeform.com/to/zepnNKjT" target="_blank">
         <p>JOIN US</p>
        </a>
      </div>
    </div>
  </header>
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
  },
  methods: {
    goToHomePage() {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.link{
  border: 2px solid #D5AF36;
}

</style>
