<template>
  <div class=" gold gold-button font-semibold mr-3 cursor-pointer transform hover:scale-110">
    <a v-if="title==='CONTACT US'" class="no-underline" href="mailto:info@hawksworth.org">
    <p>{{title}}</p>
    </a>
    <a v-else class="no-underline" href="https://b0m8i3fwr7p.typeform.com/to/G31GW584" target="_blank">
    <p>{{title}}</p>
    </a>
  </div>
</template>

<script>
export default {
name: "HireButton",
  props:{
    title:{
      type:String,
      default:'HIRE OUR TEAM'
    }
  }
}
</script>

<style scoped>

</style>
