document.addEventListener("DOMContentLoaded", init, false);

function init() {
    var input = document.getElementById("inputText");
    input.focus();

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
        openlinks(input.value);
    }
}