// TODO: clear & fix

// https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event
// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API

// document.removeEventListener('fullscreenchange', fullScreenChange);
// document.addEventListener('fullscreenchange', fullScreenChange);

// TODO video
/**
 * 
      <video
        id="vid"
        controls
        [autoplay]="false"
        [muted]="true"
        loop="true"
        controlsList="nodownload noremoteplayback noplaybackrate pictureinpicture"
      >
        <source
          src="assets/video/test.mp4"
          type="video/mp4"
        />
      </video>
 */

export function fullScreenChange(event: any) {
  console.log('HEY');
  console.log(event);

  const fullScreenElement = document.fullscreenElement;
  const fullScreenEnable = document.fullscreenEnabled;

  console.log(fullScreenElement, fullScreenEnable);
  if (!fullScreenElement && fullScreenEnable) {
    pauseAndHideVideos();
  }
}

async function pauseAndHideVideos() {
  for await (const vidElement of document.querySelectorAll('video')) {
    vidElement.pause();
    vidElement.style.display = 'none';
  }
}

function playAndShowVideo(target: HTMLVideoElement) {
  target.style.display = 'block';
  target.play();
  target.requestFullscreen();
}

export const toggleFullscreen = (target: HTMLVideoElement) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    pauseAndHideVideos();
  } else {
    playAndShowVideo(target);
  }
};
