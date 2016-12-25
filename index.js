function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var ear = [
    "+",
    "-",
    "'",
    "&",
    "*",
    "o",
    "=",
    "<>"
];
var cheek = [
    "()",
    "||",
    "{}",
    "I",
    "!",
    "/\\"
];
var eye = [
    "+",
    "-",
    "'",
    "&",
    "*",
    "o",
    "O",
    "=",
    "><",
    "0",
    "a",
    "e",
    "q",
    "ö",
    "ü",
    "x",
    "?",
    "T",
    "n",
    "U",
    "u"
];
var mid = [
    ".",
    ",",
    ":",
    ";",
    "Y",
    "_",
    "-"
];

function generateFace() {
    var leftEar, rightEar;
    var chosenEar = ear[rand(0, ear.length - 1)];
    if (chosenEar.length == 1) {
        leftEar = chosenEar;
        rightEar = chosenEar;
    } else {
        leftEar = chosenEar[0];
        rightEar = chosenEar[1];
    }
    var leftCheek, rightCheek;
    var chosenCheek = cheek[rand(0, cheek.length - 1)];
    if (chosenCheek.length == 1) {
        leftCheek = chosenCheek;
        rightCheek = chosenCheek;
    } else {
        leftCheek = chosenCheek[0];
        rightCheek = chosenCheek[1];
    }
    var leftEye, rightEye;
    var chosenEye = eye[rand(0, eye.length - 1)];
    if (chosenEye.length == 1) {
        leftEye = chosenEye;
        rightEye = chosenEye;
    } else {
        leftEye = chosenEye[0];
        rightEye = chosenEye[1];
    }
    var chosenMid = mid[rand(0, mid.length - 1)];

    return leftEar + leftCheek + leftEye + chosenMid + rightEye + rightCheek + rightEar;
}

//console.log(generateFace());

module.exports = {
    generateFace
};
