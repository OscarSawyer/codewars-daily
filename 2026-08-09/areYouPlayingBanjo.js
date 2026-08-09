function isPlayingGuitar(name) {
  if (name.charAt(0).toLowerCase() === 'a') {
    return name + " plays guitar";
  } else {
    return name + " does not play guitar";
  }
}