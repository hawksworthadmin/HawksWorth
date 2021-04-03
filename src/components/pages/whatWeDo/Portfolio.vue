<template>
  <div class="blue pb-16">
    <div class="flex justify-between items-center flex-col" style="margin: 0 auto ">
      <h2 class="text-white pt-14 pb-20" style="font-family: Fulgate,serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 119.5%;">Our <span class="gold-color">Portfolio</span></h2>
        <div class="flex justify-center flex-wrap items-center"  style="width: 80%">
          <div v-for="(data,i) in details" :key="i" style="width: 35%" class="mr-12 mt-20">
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

    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
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

      ]

    }
  }
}
</script>

<style scoped>

</style>
