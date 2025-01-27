(() => {
  // States
  let isPlaying = false;
  let isFullScreen = false;
  let scrolldelay;

  // Create dom elements
  const playFullScreenContent = document.createElement('div');
  const playPause = document.createElement('button');
  const fullScreen = document.createElement('button');
  const playBtn = new Image();
  const fullScreenBtn = new Image();

  // Set buttons images
  playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/play.svg';
  fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg';

  // Play scroll
  function pageScroll() {
    if (isPlaying) {
      playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/pause.svg';
      window.scrollBy(0, 1);
      scrolldelay = setTimeout(pageScroll, 30);
    } else {
      playBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/play.svg';
      clearTimeout(scrolldelay);
    }
  }

  function toggleScroll() {
    isPlaying = !isPlaying;
    pageScroll();
  }

  /* Fullscreen */
  async function toggleFullscreen() {
    isFullScreen = !isFullScreen;
    await fullScreenFunc();
  }

  async function fullScreenFunc() {
    try {
      if (isFullScreen) {
        fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/close.svg';
        await document.documentElement.requestFullscreen();
      } else {
        fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg';
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.error('Error handling fullscreen:', err);
    }
  }

  // Change fullscreen icon when close fullscreen with esc
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      isFullScreen = false;
      fullScreenBtn.src = 'https://res.cloudinary.com/dyw3e3f2c/image/upload/v1544757407/saveeit/fullscreen.svg';
    }
  });

  // Initialize UI
  function initializeUI() {
    // Set buttons styles
    playFullScreenContent.setAttribute(
      'style',
      'position: fixed; width: 100px; height: 50px; bottom: 25px; right: 25px; background-color: #000; color: #FFF; z-index: 9999; display: flex; justify-content: center;'
    );
    playPause.setAttribute('style', 'padding: 0; cursor: pointer; background: none; border: none;');
    fullScreen.setAttribute('style', 'padding: 0; cursor: pointer; background: none; border: none;');

    // Add elements to DOM
    document.body.appendChild(playFullScreenContent);
    playPause.appendChild(playBtn);
    fullScreen.appendChild(fullScreenBtn);
    playFullScreenContent.appendChild(playPause);
    playFullScreenContent.appendChild(fullScreen);

    // Add event listeners
    playPause.addEventListener('click', toggleScroll);
    fullScreen.addEventListener('click', toggleFullscreen);
  }

  // Initialize after a short delay to ensure DOM is ready
  setTimeout(initializeUI, 1000);
})();