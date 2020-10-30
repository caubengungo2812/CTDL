const letters = [];
let word = 'daominhkhoi';
let rword = '';

//put letters of word into stack

for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order

for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

console.log(rword);

if (rword === word) {
    console.log(`${word} is a good guy`);
} else {
    console.log(`${word} is not a good guy `);
}