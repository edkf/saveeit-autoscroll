document.addEventListener("DOMContentLoaded", function(event) {

  // States
  var isPlaying = false
  var isFullScreen = false

  // Create dom elements
  var playFullScreenContent = document.createElement('div')
  document.body.appendChild(playFullScreenContent)
  var playPause = document.createElement('button')
  var fullScreen = document.createElement('button')
  var playBtn = new Image()
  var fullScreenBtn = new Image()

  // Set buttons images
  playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/play.svg'
  fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg'

  // Play scroll
  function pageScroll() {
    if (isPlaying) {
      playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/pause.svg'
      window.scrollBy(0,1)
      scrolldelay = setTimeout(pageScroll, 30)
    } else {
      playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/play.svg'
    }
  }

  function toggleScroll () {
    isPlaying = !isPlaying
    pageScroll()
  }

  /* Fullscreen */
  function toggleFullscreen () {
    isFullScreen = !isFullScreen
    fullScreenFunc()
  }

  function fullScreenFunc() {
    if (isFullScreen === true) {
      fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/close.svg'
      document.documentElement.webkitRequestFullscreen()
    } else {
      fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg'
      document.webkitExitFullscreen()
    }
  }

  // Change fullscreen icon when close fullscreen with esc
  document.addEventListener('webkitfullscreenchange', exitHandler)
  function exitHandler() {
      if (!document.webkitIsFullScreen) {
          fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg'
      }
  }  

  setTimeout(() => {

    // Set buttons styles
    playFullScreenContent.setAttribute(
      'style',
      'position: fixed; width: 100px; height: 50px; bottom: 25px; right: 25px; background-color: #000; color: #FFF; z-index: 9999; display: flex; justify-content: center;'
    )
    playPause.setAttribute('style', 'padding: 0;')
    fullScreen.setAttribute('style', 'padding: 0;')

    // Add elements on DOM
    playPause.appendChild(playBtn)
    fullScreen.appendChild(fullScreenBtn)
    playFullScreenContent.appendChild(playPause)
    playFullScreenContent.appendChild(fullScreen)

    // Event
    playPause.addEventListener('click', toggleScroll)
    fullScreen.addEventListener('click', toggleFullscreen)

  }, 3000)
})