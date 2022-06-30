var chordElement = document.querySelector("h1");
var chordDiv = document.querySelector("#chords");
var quantity = document.querySelector("#chordNum");


var chord = {
    note: ["A","Bb","B","C","C#","D","Eb","E","F","F#","G"],
    key: ["Major", "Minor", "Diminished", "Augmented", "Major 7", "Minor 7", "Dominant 7", "Augmented 7", "Half diminished", "Diminished 7", "Dominant 7 b5", "Minor (Major 7)"],
}

function numGen(arrLength) {
    var num = Math.floor(Math.random() * arrLength);
    return num;
}

function randomChord() {
    var rand = chord.note[numGen(chord.note.length)] + " " + chord.key[numGen(chord.key.length)];
    return rand;
}





function generateChord(element) {
    chordDiv.innerHTML = ""
    for(var i = 0; i < quantity.value; i++) {
        var newTag = document.createElement("h1");
        var text = document.createTextNode("kjfdsa");
        newTag.innerText = randomChord();
        chordDiv.appendChild(newTag);
    }
}