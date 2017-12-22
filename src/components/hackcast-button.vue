<template>
  <div>
    <v-btn fixed fab bottom right @click="triggerUpload" class="fab">
      <v-icon>cloud_upload</v-icon>
      <input type="file" ref="uploadPodcast" class="hide" accept="audio/*" name="audio" @change="handleUpload">
    </v-btn>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          Dialog 2
        </v-card-title>
        <v-card-text v-if="podcastName">
          {{podcastName}}
        </v-card-text>
        <v-card-actions class="flex-end">
          <v-btn flat @click="dialog = !dialog">Close</v-btn>
          <v-btn flat @click="upload">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        podcastName: '',
        podcastFile: null,
        dialog: false
      }
    },
    methods: {
      triggerUpload() {
        this.$refs.uploadPodcast.click()
      },
      handleUpload(ev) {
          this.podcastName = this.$refs.uploadPodcast.files[0].name
          this.podcastFile = this.$refs.uploadPodcast.files[0]
          this.dialog = true

        /* const reader = new FileReader()
        const file = event.target.files
        reader.onload = event => {
          this.podcast = event.target.result
        }

        if (file[0]) {
          this.podcastName = file[0].name
          this.dialog = true
        }

        const rdr = reader.readAsDataURL(file[0]) */
      },
      upload() {
        const formData = new FormData()
        formData.append('audio', this.podcastFile)
        formData.append('title', this.podcastName)

        this.$axios
          .post('/podcasts', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'token': localStorage.getItem('token')
            }
          })
          .then(res => console.log(`Success: ${res}`))
          .catch(err => console.log(`Fail: ${err}`))
      }
    }
  }
</script>

<style>
  .fab {
    bottom: 40px !important;
    right: 40px; }

  .flex-end {
    display: flex;
    justify-content: flex-end; }

  .hide {
    display: none; }
</style>