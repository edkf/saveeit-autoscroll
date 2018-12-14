document.addEventListener("DOMContentLoaded", function(event) {

  var isGridPage = document.querySelector('.grid')
  
  if (isGridPage !== null) {

    // Play scroll
    function pageScroll() {
      window.scrollBy(0,1);
      scrolldelay = setTimeout(pageScroll, 30);
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

      playPause.textContent = '▶'
      fullScreen.textContent = 'F'

      playFullScreenContent.appendChild(playPause)
      playFullScreenContent.appendChild(fullScreen)

      // Event
      playPause.addEventListener('click', pageScroll)
      fullScreen.addEventListener('click', openFullscreen)

    }, 3000);

  }
});