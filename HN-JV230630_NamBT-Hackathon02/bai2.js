function string(sentence) {
    sentence = sentence.trim();
    let words = sentence.split(" ");
    let updateWord = [];
    for (let word of words) {
        if (word.length > 0) {
            let firstWord = word[0].toUpperCase();
            let nextWord = word.slice(1).toLowerCase();
            let string = firstWord + nextWord;
            updateWord.push(string);
        }
    }
    let string = updateWord.join(" ");
    return string;
}
console.log(string(" this is A tEst "));
console.log(string("heLlo riKkei academy"));
