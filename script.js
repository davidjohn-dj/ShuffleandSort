var boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var shuffledArray = [];

function elementColors(no) {
    switch (no) {
        case 1:
            return "color1";
        case 2:
            return "color2";
        case 3:
            return "color3";
        case 4:
            return "color2";
        case 5:
            return "color3";
        case 6:
            return "color4";
        case 7:
            return "color4";
        case 8:
            return "color5";
        case 9:
            return "color3";
    }
}

function displayBox(array) {

    document.getElementById("box").innerHTML = '';

    for (var i in array) {
        var div = document.createElement("div");
        div.className = elementColors(array[i]);
        div.innerHTML = array[i];

        document.getElementById("box").appendChild(div);
    }
}

function shuffler(arrayToSort) {
    var length = arrayToSort.length, temp, index;

    // While there are elements in the array
    while (length > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * length);
        // Decrease length by 1
        length--;
        // And swap the last element with it
        temp = arrayToSort[length];
        arrayToSort[length] = arrayToSort[index];
        arrayToSort[index] = temp;
    }
    return arrayToSort;
}

function shuffle() {
    var arrayToShuffle = JSON.parse(JSON.stringify(boxArray));
    shuffledArray = shuffler(arrayToShuffle);
    displayBox(shuffledArray);
}

function sort() {
    shuffledArray = [];
    displayBox(boxArray);
}

displayBox(boxArray);