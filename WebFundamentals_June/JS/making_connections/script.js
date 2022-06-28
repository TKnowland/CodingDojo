var requestCount = document.querySelector("#request_num");
var connectionCount = document.querySelector("#connection_num");
var connectionNum = 418

function changeName(element) {
    var nameElement = document.querySelector("#name");
    nameElement.innerText = "Dijon Musk";
}

function removeRequest(element, ID) {
    var userElement = document.querySelector(ID);
    userElement.remove();
    requestCount.innerText = requestCount.innerText - 1;
}

function acceptRequest(element, ID) {
    var userElement = document.querySelector(ID);
    userElement.remove();
    requestCount.innerText = requestCount.innerText - 1;
    connectionNum++;
    connectionCount.innerText = connectionNum;
}