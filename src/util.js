export const playAudio = (isSongPlaying, audioRef) => {
  if (isSongPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
