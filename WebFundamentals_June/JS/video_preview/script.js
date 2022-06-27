console.log("page loaded...");

function previewVid(element) {
    element.play();
    element.muted = true;
}

function endPreview(element) {
    element.pause();
}

function unmute(element) {
    element.muted = false;
    element.autoplay = true;
}

function isHovered(element) {
    element.classList.add("shadow");
}

function notHovered(element) {
    element.classList.remove("shadow");
}