<template>
  <div class="nav-wrapper" :class="{'in-show': showMobileNav}">
    <div  class="blue-color lato sidenav">
      <div class="mt-4">
      <span class="ml-8" @click="$emit('close-nav')" >X Close</span>
      </div>
      <div class="items-center flex flex-col " style="padding-top: 150px">
        <router-link to="/"><p>WHY WE EXIST</p></router-link>
        <br>
        <router-link to="/hawksworth/how"><p>HOW WE WORK</p></router-link>
        <br>
        <p>WHAT WE DO</p>
        <br>
        <HireButton :title="'CONTACT US'" class="mr-0 text-white"></HireButton>
        <br>
        <div class="border rounded-sm border-blue1 py-2 px-5 ">
          <p>JOIN US</p>
        </div>
        <br>
        <HireButton class="text-white"/>

      </div>

    </div>
    <div id="overlay"  @click="$emit('close-nav')"></div>


  </div>
</template>

<script>
import HireButton from "@/components/pages/whyWeExist/HireButton";

export default {
  name: "MobileSideNav",
  components: {HireButton},
  props: {
    showMobileNav: [Boolean]
  }
}
</script>

<style scoped>
.nav-wrapper {
  position: fixed;
  height: 100%;
  width: 100vw;
  transform: translateY(-1200px);
  left: 0;
  bottom: 0;
  transition: all .5s;

}

#overlay {
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 25vh;
}

.sidenav {
  height: 75vh;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 1s;
  /*padding-top: 150px;*/
}

.in-show {
  transform: translateX(0) !important
}


</style>
