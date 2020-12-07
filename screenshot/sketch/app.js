const full_screenshot_btn = document.getElementById('full_screenshot');

full_screenshot_btn.addEventListener('click', function screenShot(event) {
  startCapture();
}, false);

async function startCapture() {
  try {
    const videoEle = document.createElement('video');
    const canvas = document.createElement('canvas');

    videoEle.autoplay = true;
    videoEle.srcObject = await navigator.mediaDevices.getDisplayMedia({
      video: {
        cursor: "always"
      },
      audio: false
    });

    videoEle.addEventListener('play', () => {
      // set width and height
      canvas.width = videoEle.videoWidth;
      canvas.height = videoEle.videoHeight;

      // draw image
      canvas.getContext('2d').drawImage(videoEle, 0, 0);
      stopCapture(videoEle);

      // create a data url
      let dataUrl = canvas.toDataURL('image/png');
      canvas.remove();

      // for downlading
      var hrefEle = document.createElement('a');
      hrefEle.href = dataUrl;
      document.body.appendChild(hrefEle);
      hrefEle.download = `screenshot.png`;
      hrefEle.click();
      hrefEle.remove();
    });

  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function stopCapture(videoEle) {
  let tracks = videoEle.srcObject.getTracks();

  for (const track of tracks) {
    track.stop()
  }
  videoEle.srcObject = null;
}