function doyouknow() {
    let inputValue = document.getElementById("input").value;

    let lower = inputValue.toLowerCase();

    if (inputValue == "ECMAScript") {
        document.getElementById("answer").innerHTML = "Right!"
    } else if (lower == "ecmascript") {
        document.getElementById("answer").innerHTML = "Almost correct. ECMAScript!";
    } else {
        document.getElementById("answer").innerHTML = "Didn't know? ECMAScript!";
    }
}