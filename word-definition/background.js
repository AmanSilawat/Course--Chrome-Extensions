console.log('background js');

chrome.runtime.onMessage.addListener(receiver);

window.word = 'faang extension';
function receiver(request, sender, sendResponse) {
    window. word = request.text;
}