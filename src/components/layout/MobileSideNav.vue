<template>
  <div class="nav-wrapper" :class="{'in-show': showMobileNav}">
    <div  class="blue-color lato sidenav">
      <div class="mt-6 flex justify-between px-8">
        <img src="@/assets/img/logo.svg"  @click="$router.push('/')" alt="" draggable="false"/>
      <span class="" @click="$emit('close-nav')" >X</span>
      </div>

      <div class="items-center route-text flex flex-col w-full" style="padding-top: 90px">
        <div class="grid grid-cols-1 divide-y divide-gray-100">
        <p @click="$router.push('/')">WHY WE EXIST</p>
        <br>
          <br>
        <p @click="$router.push('/hawksworth/how')">HOW WE WORK</p>
        <br>
          <br>
         <p @click="$router.push('/hawksworth/what')">WHAT WE DO</p>
        </div>

        <HireButton :title="'CONTACT US'" class="mr-0 mt-16 text-white"></HireButton>

<!--        <div class="border rounded-sm border-blue1 py-2 px-5 ">-->
<!--          <p>JOIN US</p>-->
<!--        </div>-->
<!--        <br>-->
<!--        <HireButton class="text-white"/>-->

      </div>

    </div>
    <div id="overlay"  @click="$emit('close-nav')" ></div>


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
  transform: translateY(-1300px);
  left: 0;
  bottom: 0;
  transition: all .5s;
  z-index: 2;

}

#overlay {
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100vh;
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
.route-text p{
  font-family: Fulgate,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  color: #2B3367;

}

</style>
