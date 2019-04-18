chrome.contextMenus.create({
    title: "Open",
    contexts: ["selection"],
    onclick: onclick
});

function onclick(info) {
    openlinks(info.selectionText);
}