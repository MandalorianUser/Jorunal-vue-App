<template>
  <navbar-component></navbar-component>
  <h1>DayBookLayout</h1>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default{
  components:{
    NavbarComponent: defineAsyncComponent( ()=> import('@/modules/daybook/components/Navbar-Component.vue'))
  }
}
</script>
