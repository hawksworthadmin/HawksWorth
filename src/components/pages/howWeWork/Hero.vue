<template>
  <div class="hero-class blue pb-32" style="margin: 0 auto; height:auto">
    <Header/>
    <div class="flex pt-20 lg:pt-40 md:pt-28 text-white lato w-full px-4 lg:px-0" style="margin: 0 auto">
      <div id="how-hero" class="lg:pl-80 md:pl-28">
        <div class="flex">
          <div style="border: 3px solid #D5AF36; height: 45px; margin-top: 5px; margin-right: 15px"></div>
          <h5 class="lg:w-80 md:w-80 w-full alliance-text-width font-semibold text-base" style="color: #F4F5F7">Complex problems of today
            require modern solutions.
            Organizations within our network readily collaborate with us
            to approach problems differently and all work together to create
            impact at scale.
          </h5>
        </div>
        <br>
        <br>
        <h2 class="lg:w-1/3 md:w-3/4 alliance-text-width w-full lg:text-2xl text-xl font-extrabold">
          WE PARTNER WITH AND SERVE COMMUNITIES, GOVERNMENTS AND CORPORATE GLOBALLY, PROVIDING AN INNOVATIVE MIX OF
          SERVICES.
        </h2>
      </div>
      <div class="text-white hidden lg:block md:block lg:-mr-11 md:-mr-7  mt-8 fixed right-0 transform rotate-90">
        <HireButton :title="'CONTACT US'" class="mr-0"></HireButton>
      </div>
    </div>
    <div
        class="flex px-6 lg:px-0 lg:mt-56 mt-16 flex-div flex-col items-center md:flex-col lg:flex-row ">
      <div>
        <img src="@/assets/img/man-writing.png" data-src="@/assets/img/man-writing.png" class="lazyload" alt="" width="531" height="660"/>
      </div>

      <div class="lato  lg:px-36 lg:mx-auto  pr-0 lg:w-998 alliance-group  w-full">
        <h2 class="text-2xl mt-8 lg:mt-0 alliance font-extrabold text-white">Our Alliances</h2>
        <br>
        <p class="font-bold">Today’s dynamic business challenges require solutions that are agile,
          multifaceted and simple. Our capabilities are enhanced by leveraging
          effective global collaborations to create impact at sustainable scale
          and at speeds necessary for market innovation.
        </p>
        <p class="">
          <span>Hawksworth</span> facilitates investments that catalyze economic and
          social change. It provides business and investment strategies
          equally driven by purpose and performance and develops innovative
          ways to invest and mobilize capital in emerging markets.
        </p>
        <p class="">
          <span>Eyecity</span> has strong strategic and rigorous analytical capabilities
          with deep knowledge and networks across emerging markets. It works
          collaboratively across the public, private and philanthropic sectors to fuel
          inclusive growth. acts as a bridge between private data and important social
          problems. It creates tools to interpret data and uncover solutions
          in international development, humanitarian action, and social impact.
        </p>
        <p>
          <span>EY</span> provides research and analysis to find actionable solutions. It helps to answer
          questions about markets, consumers and lifestyles across more than
          20 African countries via quantitative and qualitative studies.
          It specializes in the inventory, collection,
          and analysis of primary research data.
        </p>
        <p>
          <span>Astract</span> fosters creative solutions
          to enhance economic opportunity and human potential,
          combining the best skills in human-centered design,
          rapid prototyping and systems thinking to accelerate
          positive change in underserved communities.
        </p>
      </div>

    </div>


  </div>
</template>

<script>
import HireButton from "@/components/pages/whyWeExist/HireButton";
import Header from "@/components/layout/Header";
import {gsap} from "gsap";

export default {
  name: "Hero",
  components: {Header, HireButton},
  // mounted() {
  //   console.log('mounted')
  //   const header = document.querySelector("header");
  //   console.log(header)
  //   const hero_container = document.querySelector('.hero-class1')
  //   const sectionObserver = new IntersectionObserver(((entries) => {
  //     console.log(entries)
  //     entries.forEach(entry => {
  //       if (!entry.isIntersecting) {
  //         header.classList.add("how-nav-color")
  //       } else header.classList.remove("how-nav-color")
  //     })
  //   }), {threshold: .1})
  //
  //   sectionObserver.observe(hero_container)
  // },
   mounted() {
     gsap.from("#how-hero",{duration: 3, x: 300, opacity: 0, scale: 0.5});

   }

}
</script>

<style>
.alliance-group p {
  margin-bottom: 26px !important;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 151%;
  color: #F4F5F7;
  /* or 18px */
}

.alliance-group span {
  color: #D5AF36;
}
.how-nav-color{
  background:#2B3367;
  z-index: 2;
}


@media screen and  (min-width: 1024px) and (max-width: 1374px) {
  .alliance-text-width {
    width: 60%;
  }

  .flex-div {
    flex-direction: column;
  }

  .alliance {
    margin-top: 30px;
  }
  .alliance-group{
    padding-right: 0;
  }
}
</style>
