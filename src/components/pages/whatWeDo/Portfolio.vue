<template>
  <div class="blue pb-16" style="width: 100%">
<!--    <vuescroll :ops="ops">-->
    <vuescroll :ops="ops">
      <template>
    <div class="flex justify-between items-center flex-col horizontal" style="margin: 0 auto;width: 100%">
      <h2 class="text-white pt-14 pb-20" style="font-family: Fulgate,serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 119.5%;">Our <span class="gold-color">Portfolio</span></h2>

          <div class="scroll" >
            <PortfolioText :details="details"/>
            <PortfolioText :details="details"/>
            <PortfolioText :details="details"/>
          </div>






    </div>
      </template>
    </vuescroll>
<!--    </vuescroll>-->
<!--    <div class="container">-->
<!--      <ul class="progressbar">-->
<!--        <li class="active">Mobile Details</li>-->
<!--        <li class="active">Upload</li>-->
<!--        <li>Payment</li>-->
<!--      </ul>-->
<!--    </div>-->

  </div>
</template>

<script>
import PortfolioText from "@/components/pages/whatWeDo/PortfolioText";
import vuescroll from 'vuescroll';
export default {
  name: "Portfolio",
  components: {PortfolioText,vuescroll},
  data(){
    return{
      details:[
        {
          title:'$40m Emerging Market fund',
          msg:'Reviewed fund performance and capital\n' +
              '              requirement based on pipeline of vetted\n' +
              '              deals and early stage ecosystem financing gaps. Validated current\n' +
              '              fund strategy and investment thesis, designed fund deal\n' +
              '              making and exit strategies. Modelled 10-year fund returns\n' +
              '              based on several exit scenarios. Currently leading\n' +
              '              advanced conversations with anchor investors.'
        },
        {
          title:'$1.2B US Based Family Office',
          msg:'Assisted Healthcare and Life Sciences focused fund to strengthen ' +
              'fund thesis, revamped deal thesis to focus on late-stage new drug' +
              ' development and early-stage medtech and biotech startups.' +
              ' Developed  due diligence process to leverage AI-modeling ' +
              'from open-source big-data on indications going through successful FDA approvals.'
        },
        {
          title:'$1m US Based Social Impact Fund',
          msg:'Revised draft fund investment thesis ' +
              'to include Agtech and Fintech. Made recommendations' +
              ' to revamp deal sourcing, due diligence and governance ' +
              'procedureS. Fund has made 10+ investments across sectors' +
              ' with 10x return on portfolio valuation.'
        },
        {
          title:'$1m Lagos Non-Profit Accelerator',
          msg:'Designed accelerator program, selection ' +
              'and evaluation framework, accelerator curriculum,' +
              ' and fund value proposition. Program expected to ' +
              'take hold 40-50 startups per annum and invest $20-50k per startup team.'
        }

      ],
      index:0,
      ops: {
        rail: {
          opacity: '0.2',
          background: undefined,
          border: '1px solid #cecece',
          size: '15px'
        },
        bar: {
          background: '#00ff00',
          keepShow: false,
          size: '10px',
          minSize: 0.2
        },
        scrollButton: {
          enable: true,
          background: '#cecece'
        },
        scrollPanel: {
          easing: 'easeInQuad',
          speed: 800
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: true,
          locking: true,
          checkShifKey: true
        }
      },

    }
  },
}
</script>

<style scoped>
.scroll{
  display: flex;
  max-width: 80%;
  overflow-x: scroll
}
.scroll::-webkit-scrollbar{
  display: none;
}
.container {
  width:100%;
  margin-top: 100px;
}
.progressbar {
  counter-reset: step;
}
.progressbar li{
  list-style-type: none;
  float: left;
  width: 33.33%;
  position:relative;
  text-align: center;
  font-weight: 600;
}
.progressbar li:before {
  /* CSS for creating steper block before the li item*/
  content:counter(step);
  counter-increment: step;
  height:30px;
  width:30px;
  line-height: 30px;
  border: 2px solid #ddd;
  display:block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
}
.progressbar li:after {
  /* CSS for creating horizontal line*/
  content:’’;
  position: absolute;
  width:100%;
  height:2px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after {
  content:none;
}
.progressbar li.active {
  color:#27ae60;
}
.progressbar li.active:before {
  border-color:#27ae60;
}
.progressbar li.active + li:after{
  background-color:#27ae60;
}
</style>
