console.log('Loadded image extension');

let filenames = [
    "owais-raza-qadri.jpg",
    "hafiz-ahmed-raza-qadri.jpg",
    "abdul-rauf-roofi.jpg"
];

let imgs = document.getElementsByTagName('img');

for (const imgEle of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'imgs/' + filenames[r]
    let url = chrome.extension.getURL(file);
    imgEle.src = url
    console.log(url);
}