function isPalindrome(text) {
    text = text.toLowerCase();
    let newText = "";
    for(let i = 0; i < text.length; i++) {
        if(text[i] !== " ") {
            newText += text[i];
        }
    }

    let reverseText = "";
    for(let i = newText.length - 1; i >= 0; i--) {
        reverseText += newText[i];
    }

    return newText === reverseText;
}

let text = "Amor a Roma";
console.log(isPalindrome(text) === true ? "Es palindromo" : "No es palindromo");
