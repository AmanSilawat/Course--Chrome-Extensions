console.log("backgound running");

chrome.browserAction.onClicked.addListener(buttonClicked);

// click on extension icon button
function buttonClicked(tab) {
    let msg = {
        txt: "hello"
    }

    // send data on content.js
    chrome.tabs.sendMessage(tab.id, msg);
}