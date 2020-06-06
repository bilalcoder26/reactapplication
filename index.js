//CHALLENGE 1 REVERSE A STRING
// Return a string in reverse
// ex . reverseString('hello) === 'olleh'

// 1 ways
// function reverString(str){
//     const strArr = str.split('');
//     strArr.reverse();
//     console.log(strArr)
//     return strArr.join('')
//     console.log(strArr)

// }

// reverString('hello')

//2 way***************************************************

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('bilal ahmed'))

// 3 style***********************************************

// function reverseString(str){
//     // let revString ='';
//     // for(let i = str.length - 1; i >= 0; i--){
//     //     revString = revString + str[i];
//     // }
//     // return revString;
//  ////////////////////////////////
//     let revString ='';
//     for(let i = 0; i <= str.length -1 ; i++){
//         revString = str[i] + revString ;
//     }
//     return revString;
// }
// console.log(reverseString('bilal'))

// //4 style******************By using  for of loop***********************************

// function reverseString(str){
//     let revString ='';
//     for(let char of str){
//         revString = char + revString;
//     }
//     return revString
// }
// console.log(reverseString('monu'))


// 5 style *********by using forEach method***************


// function reverseString(str){
//     let revString ='';
//     // str.split('').forEach(function(char){
//     //     revString = char + revString ;
//     // });
//     // return revString;
//**************** */
//     str.split('').forEach(char =>
//             revString = char + revString 
//         );
//         return revString;
// }
// console.log(reverseString('monunammem'))


//****By using reduced function */

// function reverseString(str){
//     return str.split('').reduce(function(revString,char){
//         return char + revString;
//     }, '');
// }
// console.log(reverseString('nenmebildh'))

// #######   Palindrom #################################################
//ex isPalindrom('racecar) === 'true',isPalindrom('hello')=== false

// function isPalindrom(str){
//     const reverseString = str.split('').reverse().join('')
//     return reverseString === str;
// }

// console.log(isPalindrom('racecar'))
// console.log(isPalindrom('madam'))
// console.log(isPalindrom('helloji'))

//############ challenge -3 reverse integer
//return interger in reverse order example ---- reverseInt(258) === 852

// function reverseInt(int){
//     const reverseString = int.toString().split('').reverse().join('')
//     return parseInt(reverseString)

// }

// console.log(reverseInt(36598))


// ########## challenges 4 Capitalize Lletters

// Return a string with first letter of every word is capitalized
// ex capitalizeLettter("i love javascript") === " I Love Javascript"


// function capitalizeLetter(str){
//     const strArr = str.toLowerCase().split(' ')

//     for(let i = 0; i< strArr.length; i++){
//         strArr[i] = strArr[i].substring(0,1).toUpperCase() + 
//         strArr[i].substring(1);
//     }
//     return strArr.join(' ')

// }
// console.log(capitalizeLetter('i love javascript'))


// 2 way ******* capiltalize methdos by using map methods

// function capitalizeLetter(str){
//     return str
//            .toLowerCase()
//            .split(' ')
//            .map(function(word){
//             //    console.log(word)
//                return word[0].toUpperCase() + word.substr(1)
//             })
//             .join(' ')
// }
// console.log(capitalizeLetter('i love javascript'))
// console.log(capitalizeLetter('i love allah'))

// 3 way ******* capiltalize methdos by using regular expression
// // 
// function capitalizeLetter(str){
//          return str.replace(/\b[a-z]/gi, function(char) {
//     return char.toUpperCase();
//   });
               
//     }
//     console.log(capitalizeLetter('i love javascript'))
//     console.log(capitalizeLetter('i love allah'))

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
// function maxCharacter(str) {
//     const charMap = {};
//     let maxNum = 0;
//     let maxChar = '';
  
//     str.split('').forEach(function(char) {
//       if(charMap[char]) {
//         charMap[char]++;
//       } else {
//         charMap[char] = 1;
//       }
//     });
  
//     for(let char in charMap) {
//       // debugger;
//       if(charMap[char] > maxNum) {
//         maxNum = charMap[char];
//         maxChar = char;
//       }
//     }
  
//     return maxChar;
  
  
    // Here is my version of the algorithm.
    // I put the string into an array and I sort it.
    // Then I loop through the array keeping track of the count for each character.
    // I keep track of the "current character" and the "max character" with objects.
  
    // const sortedStr = str.split('').sort();
    // const maxChar = {char: '', count: 0};
    // const currentChar = {char: '', count: 0};
  
    // sortedStr.forEach(char => {
    //   if(currentChar.char === char){
    //     currentChar.count++;
    //   } else {
    //     if(maxChar.count < currentChar.count){
    //       maxChar.char = currentChar.char;
    //       maxChar.count = currentChar.count;
    //     }
    //     currentChar.char = char;
    //     currentChar.count = 0;
    //   }
    // });
  
    // return maxChar.char;
//  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if(i % 3 === 0) {
        console.log('Fizz');
      } else if(i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz()