<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>
    <button @click="goToDayBook" class=" ms-1 btn btn-success" >1 Success</button>
    <button @click="goToDayBook" class=" ms-1 btn btn-primary">2 Primary</button>
    <button @click="goToDayBook" class=" ms-1 btn btn-secondary">3 Secondary</button>
  </div>
</template>

<script>
export default{
  methods:{
    goToDayBook(){
      this.$router.push({name:'daybook-layout'})
    }
  }
}
</script>
