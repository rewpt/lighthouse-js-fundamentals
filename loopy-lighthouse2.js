/*
Log 100-200
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.
*/
const loopyLighthouse = (range, multiples, words) => {
  let startRange = range[0];
  let endRange = range [1];
  let multiple1 = multiples[0];
  let multiple2 = multiples[1];
  let word1 = words[0];
  let word2 = words[1];
  let loopTrack = range[0];

  while(loopTrack <= endRange){
    if(loopTrack % multiple1 === 0 && loopTrack % multiple2 === 0){
      console.log(word1 + word2);
    }else if(loopTrack % multiple1 === 0 && loopTrack % multiple2 > 0){
      console.log(word1);
    }else if(loopTrack % multiple1 > 0 && loopTrack % multiple2 === 0){
      console.log(word2)
    }else{
      console.log(loopTrack)
    }
    loopTrack++
  }
}