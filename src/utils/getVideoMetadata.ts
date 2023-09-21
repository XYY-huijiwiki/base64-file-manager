import mime from "mime/lite";

async function getVideoMetadata(videoFile: File) {
  const video = document.createElement("video");
  video.src = URL.createObjectURL(videoFile);
  video.preload = "metadata";
  video.currentTime = 1;
  await new Promise<void>((resolve, reject) => {
    video.onloadeddata = () => {
      resolve();
    };
    video.onerror = () => {
      reject();
    };
  });
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const poster = canvas.toDataURL("image/png");
  console.log(video.duration);
  return {
    poster,
    duration: video.duration,
    size: videoFile.size,
    width: video.videoWidth,
    height: video.videoHeight,
    type: videoFile.type,
    mime: mime.getType(videoFile.name),
  };
}

export default getVideoMetadata;