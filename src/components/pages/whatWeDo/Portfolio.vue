<template>
  <div class="blue pb-32" style="width: 100%">
    <div class="flex justify-between items-center flex-col horizontal px-8" style="margin: 0 auto;width: 100%">
      <h2 class="text-white pt-14 pb-6 lg:pb-20" style="font-family: Fulgate,serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 119.5%;">Our <span class="gold-color">Portfolio</span></h2>

          <hooper style="height: 550px!important;">
            <slide>
              <PortfolioText :details="details"/>
            </slide>
            <slide>
              <PortfolioText :details="details1"/>
            </slide>
            <slide>
              <PortfolioText :details="details2"/>
            </slide>
            <slide>
              <PortfolioText :details="details3"/>
            </slide>
            <slide>
              <PortfolioText :details="details4"/>
            </slide>
            <slide>
              <PortfolioText :details="details5"/>
            </slide>
            <slide>
              <PortfolioText :details="details6"/>
            </slide>
            <slide>
              <PortfolioText :details="details7"/>
            </slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>






    </div>
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
import { Hooper, Slide,Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: "Portfolio",
  components: {PortfolioText,Hooper,Slide,HooperPagination},
  data(){
    return{
      details:[
        {
          title:'Sports Policy Development for Lagos State',
          msg:'Supported the Lagos State Sports Commission in' +
              ' the development of a robust sports policy and implementation plan.'
        },
        {
          title:'Strategy Development for KanInvest',
          msg:'Preparation of strategy, business model and implementation' +
              ' plan for Kano State Investment Promotion Agency, to facilitate ' +
              'large scale investment into the state.'
        },
        {
          title:'Nigeria Innovation Program',
          msg:'A $500m programme sponsored by the AfDB and the Office ' +
              'of the Vice President of Nigeria to catalyze the development' +
              ' of the innovation ecosystem ' +
              'within Nigeria through human capital development, infrastructure upgrade, ' +
              'financing & enabling environment'
        },
        {
          title:'Project Vertigo - Fundraise for  a Pan-African VC',
          msg:'Performed impact measurement, designed theory of change,' +
              ' reviewed impact investment framework and optimized ' +
              'the investment strategy for a top West African VC fund looking ' +
              'to raise $30m to expand across the continent.'
        }

      ],
      details1:[
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
      details2:[
        {
          title:'World Bank',
          msg:'Analysis of the Petroleum Industry of Nigeria and Mapping Strategies to allow ' +
              'participation of indigenous businesses towards industrialization ' +
              'of the downstream petroleum sector.'
        },
        {
          title:'1776 Venture Fund and Generation Enterprise',
          msg:'Selection and Coaching of Nigerian Businesses to' +
              ' compete for a global pool (USD 1 million+) of investment.'
        },
        {
          title:'USAID/ USADF/ GENERAL ELECTRIC',
          msg:'Preparation of business model and management plan for ' +
              'large scale investment into a Nigerian corporation to enable' +
              ' development of solar powered electricity grids.'
        },
        {
          title:'Unreasonable Institute',
          msg:'Organization and delivery of investor readiness accelerator labs ' +
              'for small businesses' +
              ' to validate and iterate business models, fine tune ' +
              'business plans and pitch to investors.'
        }

      ],
      details3:[
        {
          title:'Nigeria Agriculture Focused Fund',
          msg:'Facilitated the design, development and fundraising for fund' +
              ' investing in high-growth enterprises across agricultural value chain' +
              ' in Nigeria, including processing, livestock, storage, distribution,' +
              ' organic farming products and production.'
        },
        {
          title:'Fundraising Strategy',
          msg:'Performed the feasibility study and developed the business plan to' +
              ' facilitate the fundraising process of $20 million for a major shopping' +
              ' conglomerate in Nigeria. The project also involved ' +
              'the development of financial model and engagement deck ' +
              'to facilitate conversation with prospective investors..'
        },
        {
          title:'Greenhouse Farm',
          msg:'Developed business plan, business and operating model and ' +
              'financing plan for startup GreenHouse Farm.'
        },
        {
          title:'Burgeoning Agriculture Start-up',
          msg:'Raised project financing to undertake short term agricultural project;' +
              ' provided business management and advisory support throughout the business cycle'
        }

      ], details4:[
        {
          title:'SME Growth Fund',
          msg:'Developed micro-credit scheme similar to Grameen ' +
              'Model to provide low-interest facility ofless than' +
              ' or equal to USD 500 to Micropreneurs  in Lagos, Nigeria.'
        },
        {
          title:'Startup Urban Retail',
          msg:'Organised and provided pro-bono and low-cost coaching, ' +
              'consulting and business clinics for 500+ SMEs, using Consulting-to-SME' +
              ' social enterprise model.'
        },
        {
          title:'$30m Innovation Fund',
          msg:'Design of an innovation programme for an East African Country.' +
              ' Developed the strategy for the programme to address the ' +
              'financing gap, the project will establish affordable funding' +
              ' mechanisms for growth companies.The total estimated cost of the ' +
              'project is USD 68.6 million (UA 48.65 million).'
        },
        {
          title:'$20m Creativity and Technology \n' +
              'Facility Program',
          msg:'Supported the central bank of a West African country in performing an' +
              ' analysis to understand the intervention archetypes to be supported through' +
              ' the initiative. Defined the facility disbursement structure' +
              ' and recommended the loan terms (such as tenure, rate, moratorium,' +
              ' etc) based on socio-economic insights.'
        }

      ], details5:[
        {
          title:'Commercial Ferry Company',
          msg:'Funding plan development, business model development ' +
              'and investor relationship management assistance.'
        },
        {
          title:'Retail and Hospital Company',
          msg:'Provided human resource advisory and transformation services. ' +
              'Developed policies and proceduresand advised on recruitment and' +
              ' compensation policies.'
        },
        {
          title:'Urban Retail Mail',
          msg:'Developed investment teasers and pitch deck for ' +
              'USD 60 million proposed retail mall.'
        },
        {
          title:'Technology Company',
          msg:'Resolved working capital issues; secured short term' +
              ' debt instrument to finance operations and LPOs to' +
              'meet supplier obligations.'
        }

      ], details6:[
        {
          title:'Educational ERP Company',
          msg:'Evaluated and refined business concept.' +
              ' Articulated value proposition and developed business model.'
        },
        {
          title:'Real Estate Company',
          msg:'Developed business plan,' +
              'financial model and strategy for proposed USD4.75 million ' +
              'Real Estate opportunity.'
        },
        {
          title:'Urban Retail Mail',
          msg:'Developed business model and marketing plan for' +
              'interest-oriented Android-based social networking application.'
        },
        {
          title:'Greenhouse Farm',
          msg:'Reviewed year on year market and operations performance ' +
              'for a USD 250,000 cosmetics manufacturing company.'
        }

      ], details7:[
        {
          title:'Due Diligence and Case Review',
          msg:'Conducted commercial due diligence and investment' +
              ' case review for a major renewable energy player in West Africa <br> <br> ' +
              'CLIENT: PROJECT TANGO'
        },
        {
          title:'Strategy Consultancy',
          msg:'Preparation of business model and management plan for ' +
              'large scale investment into a Nigerian corporation to enable' +
              ' development of solar powered electricity grids. <br> <br>' +
              'CLIENT:USAID/USADF/GENREALELECTRIC'
        },
        {
          title:'Social Investment',
          msg:'Strategy, business case design and technology design' +
              ' & implementation for implementation of Federal Government' +
              ' funded N-Power Social Investment Program <br> <br>' +
              'eCLIENT: FEDERAL MINISTRY OF HUMANITARIAN AFFAIRS, DISASTER MANAGEMENT AND SOCIAL DEVELOPMENT'
        },
        {
          title:'Access to Energy ( Grant Application)',
          msg:'Access to energy grant application under DFI and Government ' +
              'funded programmes and scheme <br> <br>' +
              'CLIENT: USAID, WORLD BANK, AfDB RURAL ELECTRIFICATION AGENCY.'
        }

      ],

      index:0,
      hooperSettings: {
        breakpoints: {
          400: {
            centerMode: false,
            itemsToShow: 1
          },
          600: {
            centerMode: false,
            itemsToShow: 2
          },
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 6,
          }
        }
      }

    }
  },
}
</script>

<style>
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
/*.hooper-slide.is-current {*/
/*  transform: scale(1.2);*/
/*}*/
.hooper-indicator { height: 15px; width: 15px; border-radius: 50%; background-color: #FFFFFF; }
.hooper-indicator.is-active,.hooper-indicator:hover{
  background-color: #d5af36;
  border: 1px solid #d5af36;
}

</style>
