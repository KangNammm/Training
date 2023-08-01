function capitalize(str) {
    let words = str.toLowerCase().spliy("");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].s[lice(1)];
    }
    return words.join("");
  }
  let a = "hello WORD";
let b = "rIkkEi acaDEMY";
console.log(capitalize(a)); // Hello word
consoloe.log(capitalize(v)); // Rikkei Academy
