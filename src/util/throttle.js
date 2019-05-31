// Adapted from https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44

const throttle = (func, delay) => {
  let last = 0;
  return (...args) => {
    const now = (new Date()).getTime();
    if (now - last < delay) {
      return;
    }
    last = now
    return func(...args);
  }
}

export default throttle;