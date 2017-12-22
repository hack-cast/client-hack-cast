<template>
  <v-content>
    <v-container fluid grid-list-lg>
      <v-card hover v-for="(pod, i) in podcast" :key="i" class="cursor-default spacing flex-around">
        <v-avatar>
          <img :src="pod.profilePic">
        </v-avatar>
        <v-card-title class="rm-padding">
          {{pod.title}}
        </v-card-title>
        <v-btn icon @click="togglePodcast(pod.podcast, i, pod.icon)">
          <v-icon large v-if="isPlaying">pause_circle_outline</v-icon>
          <v-icon large v-else>play_circle_outline</v-icon>
        </v-btn>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
  import axios from 'axios'
  import {mapActions, mapGetters} from 'vuex'

  class Podcast {
    constructor(title, pic, file) {
      this.title = title
      this.profilePic = pic
      this.icon = 'play_circle_outline'
      this.podcast = new Audio(file)
    }
  }

  export default {
    data() {
      return {
        isPlaying: false
      }
    },
    created() {
      this.getPodcast()
    },
    computed : {
      ...mapGetters([
        'podcast'
      ])
    },
    methods : {
      togglePodcast(podcast, i, icon) {
        if (this.isPlaying === false) {
          podcast.play()
          this.isPlaying = true
        } else {
          podcast.pause()
          this.isPlaying = false
        }
      },
      ...mapActions([
        'getPodcast'
      ])
    }
  }
</script>

<style scoped>
  .flex-around {
    display: flex;
    align-items: center;
    justify-content: space-evenly; }

  .cursor-default {
    padding: 16px;
    cursor: default; }

  .spacing:not(:first-of-type) {
    margin-top: 16px; }

  .rm-padding {
    padding: 0 16px; }
</style>