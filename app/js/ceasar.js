var slider = document.getElementById("myRange");
var output = document.getElementById("number");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

const button = document.querySelector("button#button");

const letters = document.getElementById("letters");
const input = letters.querySelector(".input");

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(parseInt(slider.value));

    const char = input.value;
    const numbers = parseInt(slider.value);

    function caesar(char, numbers) {
        numbers = numbers % 26;
        var lowercase = char.toLowerCase();
        var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
        var newStr = "";

        for (var i = 0; i < lowercase.length; i++) {
            var currentLetter = lowercase[i];
            if (currentLetter === " ") {
                newStr += currentLetter;
                continue;
            }
            var currentIndex = alpha.indexOf(currentLetter);
            var newIndex = currentIndex + numbers;
            if (newIndex > 25) newIndex = newIndex - 26;
            if (newIndex < 0) newIndex = 26 + newIndex;
            if (char[i] === char[i].toUpperCase()) {
                newStr += alpha[newIndex].toUpperCase();
            } else {
                newStr += alpha[newIndex];
            }
        }
        return newStr;
    }

    var answer = caesar(char, numbers);
    const output = document.getElementById("output");
    output.textContent = answer;
});
