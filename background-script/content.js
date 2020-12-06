console.log('Chrome extension go 2');

chrome.runtime.onMessage.addListener(gotMessage)

// get message through background.js
function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt == 'hello') {
        let paragraphs = document.getElementsByTagName('p');
        for (ele of paragraphs) {
            ele.style['background-color'] = '#d7e237';
        }
    }
}