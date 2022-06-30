

function removeBox(element, ID) {
    var cookieBox = document.querySelector(ID);
    cookieBox.remove();
}

function convertValue(element) {
    var high = document.querySelectorAll(".high_temp");
    var low = document.querySelectorAll(".low_temp");
    if (element.value == "F") {
        for(var i = 0; i < high.length; i++) {
            high[i].innerText = parseInt((high[i].innerText * 2) + 32);
        }
        for(var i = 0; i < high.length; i++) {
            low[i].innerText = parseInt((low[i].innerText * 2) + 32);
        }

    }else if (element.value == "C"){
        for(var i = 0; i < high.length; i++) {
            high[i].innerText = parseInt((high[i].innerText - 32) * .5);
        }
        for(var i = 0; i < high.length; i++) {
            low[i].innerText = parseInt((low[i].innerText - 32) * .5);
        }
    }
}