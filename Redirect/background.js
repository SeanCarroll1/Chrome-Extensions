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