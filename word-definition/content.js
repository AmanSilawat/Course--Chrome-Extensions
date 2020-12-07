console.log('content js');

window.addEventListener('mouseup', mousedUpped);

function mousedUpped() {
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText)
    if (selectedText.length > 0) {
        let message = {
            text: selectedText
        }
        chrome.runtime.sendMessage(message);
    }
}