function setup() {
  noCanvas();
  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  url = url.replace(/\s+/g, '');
  loadJSON(url, gotData);

  function gotData(data) {
    createP(data[0].meanings[0].definitions[0].definition);
  }

}