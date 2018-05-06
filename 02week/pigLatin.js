'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  // Your code here
  // run the toLowerCase and trim method to convert and uppercase and space and convert the word to all lowercase and no space method
  // func to tranString() simple and comple word
  //let read the parameter and store in a varable const word1 = word1
  //change the word variable to an array to separate each letter
  // loop through the word to find the Vowel'aeiou'
  //once the vowel is found read the previous letter and store in the end of the word and add the ay at the end

  //func transVowels(word2)
  //look for a vowel at the begning of the word, if found one at the index 0 just add 'Yay' to the end of the word
  word = word.trim().toLowerCase(); //remove the spaces and then convert to LowerCase
  const arrWord = word.split('');
  //console.log(arrWord);
  let newWord;
  for (let i = 0; i <= arrWord.length; i++) {
    //find for the  1st occurance of the vowels in the word
    if (arrWord[i] === 'a' || arrWord[i] === 'e' || arrWord[i] === 'i' || arrWord[i] === 'o' || arrWord[i] === 'u') {
      if(i===0){ // check if the very first letter is and vowel and add yay to the end
        newWord = word + 'yay';
        return newWord;
      }
      newWord = word.slice(i); // copy the word after vowel found to the newWord
      //console.log("ist " + newWord);
      newWord += word.slice(0, i )+'ay'; //Add the letters behind the vowel to the newWord and add ay at the end
      //console.log("2nd " + newWord);
      return newWord;
    }
  }
  return word; // returning word that has no vowel
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('bbb'), 'bbb');
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
