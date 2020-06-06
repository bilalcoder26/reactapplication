// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

//****solution-----1 */

// function longestWord(sen){
//     //created a filted array
//     const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
//     console.log(wordArr)

// //sorted by length
// const sorted = wordArr.sort(function(a,b){
//     return b.length - a.length;
// });
// console.log(sorted)

// // if multiple words , put into array

// const longestWordArr = sorted.filter(function(word){
//     return word.length === sorted[0].length;
// })
// console.log(longestWordArr)
// //check if more than one arry value

// if(longestWordArr.length === 1){
//     // return the word
//     return longestWordArr[0];
// }else{
//     return longestWordArr;
// }
// }

// const output = longestWord('helloji there , my name is brad')
// console.log(output)

/****challenge2
 * // CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
 */

// function chunkArray(arr, len) {
//     // SOLUTION 1
  
//     // Init chunked arr
//     const chunkedArr = [];
//     // Set index
//     let i = 0;
  
//     // Loop while index is less than the array length
//     while (i < arr.length) {
//       // Slice out from the index to the index + the chunk length nd push on to the chunked array
//       chunkedArr.push(arr.slice(i, i + len));
//       // Increment by chunk length
//       i += len;
//     }
  
//     return chunkedArr;
// }
// const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2)

// console.log(output)

// //******soljution2 */
// function chunkArray(arr, len) {

//     //init chunked arr
//     const chunkedArr = [];

//     //Loop through arr
//     arr.forEach(function(val){
//     //get last element
//     const last = chunkedArr[chunkedArr.length - 1]
//     // check if last and if last length is equal to the chunk len
//     if(!last || last.length === len){
//         chunkedArr.push([val]);
//     }else{
//         last.push(val);
//     }
//     console.log(chunkedArr);
//     });
//     return chunkedArr;
    
//     }
//     const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2)
    
//     console.log(output)

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]


function flattenArray(array){
    //SOLUTION 1
    // return arrays.reduce(function(a,b){
    //     return a.concat(b);
    // });
    return [].concat.apply([],arrays);

}
    const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]])
    console.log(output)
