<template>
  <v-app dark>
    <hackcast-toolbar />
    <hackcast-drawer />
    <hackcast-content />
    <hackcast-button/>
  </v-app>
</template>

<script>
  import HackcastToolbar from './components/hackcast-toolbar'
  import HackcastDrawer from './components/hackcast-drawer'
  import HackcastContent from './components/hackcast-content'
  import HackcastButton from './components/hackcast-button'

  export default {
    components: {
      HackcastToolbar,
      HackcastDrawer,
      HackcastContent,
      HackcastButton
    }
  }
</script>