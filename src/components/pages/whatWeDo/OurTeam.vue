<template>
  <div class="border-down">

    <div class="flex justify-center flex-col items-center w-full pb-20 " v-for="i in [currentIndex]" :key="i" >
    <div class="flex justify-center items-center flex-col">
      <div>
      <h1 class="pt-16 blue-color " style="font-family: Fulgate,serif;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 119.5%;">OUR TEAM</h1>
      <div class="border-gold"></div>
      </div>
      <transition
          name="slide"
          mode="out-in"
          enter-class="slide-in"
          leave-class="slide-out"
          enter-active-class="animated slide-in-active"
          leave-active-class="animated slide-out-active"
      >
      <div class="lg:flex justify-center justify-evenly lg:w-3/6 mySlides fade" >
        <div class="w-60 pt-8" style="min-width: 240px;margin: 0 auto">
          <img :src="currentImg.src" width="233" height="267" style="min-width: 233px"/>
          <div class="arrow-background flex justify-between">
            <img src="@/assets/img/Arrow 2.svg" class="transform hover:scale-110 cursor-pointer"   @click="onPrev">
            <img src="@/assets/img/Arrow 1.svg" class="transform hover:scale-110 cursor-pointer" alt=""  @click="onNext">

          </div>
        </div>

        <div  class="lg:pl-16 pt-20 px-4">
          <h2 class="blue-color name">{{currentImg.firstName}} <span class="gold-color">{{currentImg.lastName}}</span></h2>
          <br>
          <p class="about">
           {{currentImg.details}}
          </p>
        </div>

      </div>
      </transition>
    </div>
    </div>

    </div>
</template>

<script>
export default {
name: "OurTeam",
  data(){
    return{
      teams:[
        {
          src: require('@/assets/img/team/stephaine.svg'),
          details:" 1 Stephanie is a Chartered Accountant & SME Consultant with over 7 years experience in financial\n" +
              "            advisory, operations management and business strategy. She is also the Founder of \"What Next,\n" +
              "            Coach?\", a platform that equips small businesses with the resources, community and expertise to\n" +
              "            grow and thrive beyond the 5-year survival period. So far, she has worked with over 100 SMEs in\n" +
              "            Nigeria - through masterclasses, workshops, business clinics, coaching programmes and bespoke\n" +
              "            consulting projects. Her work and contributions have been recognised by institutions such as She\n" +
              "            Leads Africa, Business Day NG, LSETF & SWEC By Adosser Bank. Previously, Stephanie was a\n" +
              "            financial auditor at Ernst & Young London with a portfolio of multinational clients across the FMCG,\n" +
              "            Maritime, Real Estate & Construction sectors. Stephanie holds a first degree in Accounting & Finance\n" +
              "            from University of Birmingham. She is also a member of the Institute of Chartered Accountants In\n" +
              "            England & Wales (ICAEW).",
          firstName:'STEPHANIE (ONWUNALI)',
          lastName:'ANYAMELE'
        },
        {
          src: require('@/assets/img/team/stephaine.svg'),
          details:"2 Stephanie is a Chartered Accountant & SME Consultant with over 7 years experience in financial\n" +
              "            advisory, operations management and business strategy. She is also the Founder of \"What Next,\n" +
              "            Coach?\", a platform that equips small businesses with the resources, community and expertise to\n" +
              "            grow and thrive beyond the 5-year survival period. So far, she has worked with over 100 SMEs in\n" +
              "            Nigeria - through masterclasses, workshops, business clinics, coaching programmes and bespoke\n" +
              "            consulting projects. Her work and contributions have been recognised by institutions such as She\n" +
              "            Leads Africa, Business Day NG, LSETF & SWEC By Adosser Bank. Previously, Stephanie was a\n" +
              "            financial auditor at Ernst & Young London with a portfolio of multinational clients across the FMCG,\n" +
              "            Maritime, Real Estate & Construction sectors. Stephanie holds a first degree in Accounting & Finance\n" +
              "            from University of Birmingham. She is also a member of the Institute of Chartered Accountants In\n" +
              "            England & Wales (ICAEW).",
          firstName:'STEPHANIE (ONWUNALI)',
          lastName:'ANYAMELE'
        },
        {
          src: require('@/assets/img/team/stephaine.svg'),
          details:"3 Stephanie is a Chartered Accountant & SME Consultant with over 7 years experience in financial\n" +
              "            advisory, operations management and business strategy. She is also the Founder of \"What Next,\n" +
              "            Coach?\", a platform that equips small businesses with the resources, community and expertise to\n" +
              "            grow and thrive beyond the 5-year survival period. So far, she has worked with over 100 SMEs in\n" +
              "            Nigeria - through masterclasses, workshops, business clinics, coaching programmes and bespoke\n" +
              "            consulting projects. Her work and contributions have been recognised by institutions such as She\n" +
              "            Leads Africa, Business Day NG, LSETF & SWEC By Adosser Bank. Previously, Stephanie was a\n" +
              "            financial auditor at Ernst & Young London with a portfolio of multinational clients across the FMCG,\n" +
              "            Maritime, Real Estate & Construction sectors. Stephanie holds a first degree in Accounting & Finance\n" +
              "            from University of Birmingham. She is also a member of the Institute of Chartered Accountants In\n" +
              "            England & Wales (ICAEW).",
          firstName:'STEPHANIE (ONWUNALI)',
          lastName:'ANYAMELE'
        },
      ],
      active:0,
      timer: null,
      currentIndex: 0
    }
  },
  methods:{
  onNext(){
    this.currentIndex += 1;
  },
    onPrev(){
      this.currentIndex -= 1;
    },
    startSlide: function() {
      this.timer = setInterval(this.onNext, 4000);
    },
    // move(amount) {
    //   let newActive
    //   const newIndex = this.active + amount
    //   if (newIndex > this.teams.length-1) newActive = 0
    //   if (newIndex === 0) newActive = this.teams.length
    //   this.active = newActive || newIndex
    // },

  },
    computed: {
      currentImg: function() {
        return this.teams[Math.abs(this.currentIndex) % this.teams.length];
      }

  },
    mounted: function() {
      this.startSlide();
    },

}
</script>

<style scoped>
.arrow-background{
  background: rgba(244, 245, 247, 0.48);
  border: 1px solid #F4F5F7;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px 17px;
  /*width: 91px;*/
  height: 40px;
}
.name{
  font-family: Fulgate;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 119.5%;
  /* identical to box height, or 36px */

  letter-spacing: -0.01em;
  text-transform: capitalize;

}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
.about{
  font-family: Lato,serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 154%;
  /* or 18px */


  color: #2B3367;

  opacity: 0.6;
}
.border-gold{
  width: 54px;
  height: 3px;
  background: #D5AF36;
  border-radius: 9px;
}
.border-down{
  border-bottom: 5px solid #D5AF36;;
  /*max-height: 700px;*/
}
/*.fade-enter-active,*/
/*.fade-leave-active {*/
/*  transition: all 0.2s ease;*/
/*  overflow: hidden;*/
/*  visibility: visible;*/
/*  !*position: absolute;*!*/
/*  width:100%;*/
/*  opacity: 1;*/
/*}*/

/*.fade-enter,*/
/*.fade-leave-to {*/
/*  visibility: hidden;*/
/*  width:100%;*/
/*  opacity: 0;*/
/*}*/
.animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}

.slide-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}

.slide-in-active {
  transition-delay: 150ms;
}

.slide-out {
  opacity: 1;
}

.slide-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}


</style>
