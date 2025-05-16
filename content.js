(function () {
  let retryCount = 0;
  const maxRetries = 10;

  function tryFindVideo() {
    const video = document.getElementById("videox-video-el");

    if (video && video.src) {
      const url = video.src.startsWith("//") ? "https:" + video.src : video.src;
      window.open(url, "_blank"); // ✅ 直接開新視窗
    } else {
      retryCount++;
      if (retryCount < maxRetries) {
        setTimeout(tryFindVideo, 1000); // 每秒檢查
      } else {
        alert("找不到影片，請先播放影片再試一次！");
      }
    }
  }

  tryFindVideo();
})();
