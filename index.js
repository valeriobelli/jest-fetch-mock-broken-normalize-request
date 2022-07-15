function fancyFetch() {
  const abortController = new AbortController();

  abortController.abort();

  return fetch("https://www.google.com", {
    signal: abortController.signal,
  }).then(() => {
    console.log("success!");

    return "success!";
  });
}

module.exports = { fancyFetch };
