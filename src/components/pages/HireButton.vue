<template>
  <div class=" gold gold-button font-semibold mr-3">
    <p>{{title}}</p>
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
