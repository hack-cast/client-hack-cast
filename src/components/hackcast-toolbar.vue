<template>
  <v-toolbar fixed app>
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Timeline</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <v-btn slot="activator" icon>
        <v-icon>sort</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="(sort, i) in sorts" :key="i">
          <v-list-tile-title>{{ sort }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        drawer: false,
        sorts: [
          'Popularity',
          'short',
          'long'
        ]
      }
    },
    methods: {
      ...mapActions([
        'ToggleDrawer'
      ]),
      toggleDrawer() {
        this.drawer = !this.drawer
        this.ToggleDrawer(this.drawer)
      }
    }
  }
</script>
