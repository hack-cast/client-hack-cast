import axios from 'axios'

const actions = {
  ToggleDrawer({commit}, payload) {
    commit('setDrawer', payload)
  },
  getPodcast({commit}, payload) {
    axios
      .get('http://api.hackcast.tk/podcasts')
      .then(res => {
          /* res.data.data.forEach(podcast => {
            this.podcasts.push(
              new Podcast(podcast.title, podcast.casterPic, podcast.audioUrl)
            )
          }) */
          commit('setPodcast', res.data.data)
      })
      .catch(err => console.error(err))
  }
}

export default actions