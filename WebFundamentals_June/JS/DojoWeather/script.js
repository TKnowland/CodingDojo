

function removeBox(element, ID) {
    var cookieBox = document.querySelector(ID);
    cookieBox.remove();
}

function convertValue(element) {
    var high = document.querySelector(".high_temp");
    var low = document.querySelector(".low_temp");
    if (element.value == "F") {
        high.innerText = parseInt(high.innerText * (9/5) + 32);
        low.innerText = parseInt(high.innerText * (9/5) + 32);
    }else if (element.value == "C"){
        high.innerText = parseInt((high.innerText - 32) * (5/9));
        low.innerText = parseInt((high.innerText - 32) * (5/9));
    }
}