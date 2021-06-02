const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(arrInput) {
  const viableStations = [];
  for(const station of stations){
    if((station.includes('school') || station.includes('community centre')) && station[1] >= 20){
      viableStations.push(station[0]);
    }
  }
  return viableStations;
}
console.log(chooseStations(stations));