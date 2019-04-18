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

function openlinks(searchText) {
    if (searchText && localStorage["urls"]) {
        var urls = localStorage["urls"].split('\n');
        urls.forEach(function (url) {
            chrome.tabs.create({
                url: url.format(searchText)
            });
        })
    }
}
