class Podcast {
  constructor(title, pic, file) {
    this.title = title
    this.profilePic = pic
    this.icon = 'play_circle_outline'
    this.podcast = new Audio(file)
  }
}

const getters = {
  drawer: states => states.drawer,
  podcast: states => {
    return states.podcast.map(
      pod => {
        return new Podcast(pod.title, pod.casterPic, pod.audioUrl)
      }
    )
  }
}

export default getters