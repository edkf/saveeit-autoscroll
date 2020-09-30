document.addEventListener("DOMContentLoaded", function(event) {

  var isPlaying = false

  var playBtn = new Image();
  var fullScreenBtn = new Image();
  playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/play.svg'
  fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg'

  var isGridPage = document.querySelector('.grid')
  
  if (isGridPage !== null) {

    // Play scroll
    function pageScroll() {
      if (isPlaying) {
        playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/pause.svg'
        window.scrollBy(0,1);
        scrolldelay = setTimeout(pageScroll, 30);
      } else {
        playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/play.svg'
      }
    }

    function toggleScroll () {
      isPlaying = !isPlaying
      pageScroll()
    }


    /* View in fullscreen */
    var elem = document.documentElement;
    function openFullscreen() {
      elem.webkitRequestFullscreen();
    }

    setTimeout(() => {

      // Create dom elements
      var playFullScreenContent = document.createElement('div')
      document.body.appendChild(playFullScreenContent)

      playFullScreenContent.setAttribute(
        'style',
        'position: fixed; width: 100px; height: 50px; bottom: 15px; right: 15px; background-color: #000; color: #FFF; z-index: 9999; display: flex; justify-content: center;'
      )

      var playPause = document.createElement('button')
      var fullScreen = document.createElement('button')
      playPause.setAttribute('style', 'padding: 0;')
      fullScreen.setAttribute('style', 'padding: 0;')

      playPause.appendChild(playBtn)
      fullScreen.appendChild(fullScreenBtn)

      playFullScreenContent.appendChild(playPause)
      playFullScreenContent.appendChild(fullScreen)

      // Event
      playPause.addEventListener('click', toggleScroll)
      fullScreen.addEventListener('click', openFullscreen)

    }, 3000);

  }
});