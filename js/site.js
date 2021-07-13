//Step -1 get the word
//step 2 reverse the word
//strings are arrays of charachters 
//we can use the same code to access the letters in a string
//array[index] give me the value of array at position idex
//string[index] - give me the letter in the string at position index 

function getWord() {
    let word = document.getElementById("word").Value;

    let revWord = flipWord(word);

    displayResult(word, revWord);
};

funtion flipWord(word) {

    let revWord = "";

    for (let index = word.length - 1; index = 0; index--) {
        let letter = word[index];
        revWord += letter;
    }

    return revWord;

}

function displayResults(word, revWord) {
    let output = document.getElementById("output");
    output.innerText = `you entered the word ${word}. Reversed is ${revWord}`;
}