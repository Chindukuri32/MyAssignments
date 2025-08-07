//Example-1Length of the Last Word

const str1 = "Hello World"
const splitVal = str1.split(' ')
//console.log(splitVal);
const lastWord = splitVal[splitVal.length-1];
//console.log(lastWord);
const wordLength = lastWord.length;
//console.log(wordLength);
console.log("The Last Word is " +lastWord+ " with Length " +wordLength);

//Example-2 Trimming

const str2 = " fly me  to  the moon"
const trimVal = str2.trim();
console.log(trimVal);
const splitVal2 = trimVal.split(',')
console.log(splitVal2);
const lastWord1 = splitVal2[splitVal2.length-1];
console.log(lastWord1);





