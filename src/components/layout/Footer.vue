<template>
  <div class="blue" style="height: auto">
    <div class="mx-auto w-4/5">
      <div class="flex justify-end text-white pt-20">
        <div class="justify-between md:flex lg:flex " style="width: 500px">
          <p style="cursor: pointer" class="mb-3" @click="$router.push('/')">WHY WE EXIST</p>
          <p @click="$router.push('/hawksworth/how')" class="mb-3" style="cursor: pointer">HOW WE WORK</p>
           <p @click="$router.push('/hawksworth/what')"  style="cursor: pointer">WHAT WE DO</p>
        </div>
      </div>
      <div class="my-16" style="border: 0.5px solid #FFFFFF;"></div>
      <div class="flex flex-col lg:flex-row md:flex-row justify-between mb-8 lg:mb-24">
        <div class="lato text-white" style="width: 270px">
          <p>Hawksworth Advisors strategic advisory firm combines the
            best of private sector strategy skills and rigorous analytical
            capabilities along with deep knowledge and networks across
            emerging and frontier markets with special focus on Africa and emerging markets.</p>
        </div>
        <div class="flex items-center text-white font-semibold text-xs" style="height: 89px">
          <div><HireButton></HireButton></div>
          <div class="border rounded-sm border-white py-2 px-5 " style="height: 34px">
            <a  class="no-underline" href="https://b0m8i3fwr7p.typeform.com/to/zepnNKjT" target="_blank">
            <p>JOIN US</p>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row  text-white lato justify-between pb-16">
        <div class="order-2 lg:order-1">
          <p>© {{ new Date().getFullYear() }} Hawksworth. All rights reserved.</p>
        </div>
        <div class="flex mb-16 lg:mb-0 justify-between order-1 lg:order-2" style="width: 150px">
          <img src="@/assets/img/Gmail.svg" alt="">
          <img src="@/assets/img/Facebook.svg" alt="">
          <img src="@/assets/img/Twitter.svg" alt="">

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HireButton from "@/components/pages/whyWeExist/HireButton";
export default {
  name: "Footer",
  components: {HireButton}
}
</script>

<style scoped>

</style>
