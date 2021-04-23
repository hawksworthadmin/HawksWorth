<template>
  <div class=" gold gold-button font-semibold mr-3 cursor-pointer transform hover:scale-110">
    <a class="no-underline" href="mailto:info@hawksworth.org">
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
