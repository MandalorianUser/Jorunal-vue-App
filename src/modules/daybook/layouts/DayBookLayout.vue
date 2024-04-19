<template>
  <navbar-component></navbar-component>
  <h1>DayBookLayout</h1>
  <div class="d-flex">
    <div class="col-4  overflow-auto">
      <EntryListComponent />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NavbarComponent: defineAsyncComponent(() => import('@/modules/daybook/components/Navbar-Component.vue')),
    EntryListComponent: defineAsyncComponent(() => import('@/modules/daybook/components/EntryList-Component.vue'))

  }
}
</script>
