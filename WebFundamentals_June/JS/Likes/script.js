var likeCount = 0;
var likeCount2 = 0;
var likeCount3 = 0;

function like(element, ID) {
    var likeElement = document.querySelector(ID);
    likeCount++;
    likeElement.innerText = likeCount + "like(s)"
}

function like2(element, ID) {
    var likeElement = document.querySelector(ID);
    likeCount2++;
    likeElement.innerText = likeCount2 + "like(s)"
}

function like3(element, ID) {
    var likeElement = document.querySelector(ID);
    likeCount3++;
    likeElement.innerText = likeCount3 + "like(s)"
}
