var likeCount = 0;
var likeElement = document.querySelector("#like_count");

function like(element) {
    likeCount++;
    likeElement.innerText = likeCount + "like(s)"
}
