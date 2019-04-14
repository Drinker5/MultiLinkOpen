document.addEventListener("DOMContentLoaded", init, false);

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

function init() {
    var input = document.getElementById("inputText");

    var textarea = document.getElementById("urls");
    textarea.addEventListener('change', function () {
        localStorage["urls"] = textarea.value;
    }, false);

    var savedUrls = localStorage["urls"];
    if (savedUrls) {
        textarea.value = savedUrls;
        var urls = savedUrls.split('\n');
        textarea.rows = urls.length;
    }

    var button = document.getElementById("openButton");
    button.addEventListener('click', onclick, false);
    function onclick() {
        var urls = textarea.value.split('\n');
        var searchText = input.value;
        if (searchText) {
            urls.forEach(function (url) {
                chrome.tabs.create({
                    url: url.format(searchText)
                });
            })
        }
    }
}