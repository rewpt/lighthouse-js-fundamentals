const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  let highScore = -1;
  let returnSubmitter = '' ;
  for(let vegetable of vegetables){
    console.log('vegetable.metric: ', vegetable[metric])
    if(vegetable[metric] > highScore){
      highScore = vegetable[metric];
      returnSubmitter = vegetable.submitter;
    }
  }
  console.log('return submitter: ', returnSubmitter)
  return returnSubmitter
}

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));