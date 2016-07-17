// Saves keystrokes. Doesn't require jQuery.

function byId(id) {
    return document.getElementById(id);
}

function byClass(className) {
    return document.getElementsByClassName(className);
}

function byTag(tagName) {
    return document.getElementsByTagName(tagName);
}

function query(queryString) {
    return document.querySelector(queryString);
}

function queryAll(queryString) {
    return document.querySelectorAll(queryString);
}
