var host = "https://www.google.ie/";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://facebook.com/*",
            "*://www.facebook.com/*",
            "*://espn.com/*",
            "*://www.espn.com/*",
            "*://cnn.com/*",
            "*://www.cnn.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

chrome.browserAction.onClicked.addListener(function() {
    var w = 440;
    var h = 220;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2); 

    chrome.windows.create({'url': 'popup.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , function(window) {
    });
});