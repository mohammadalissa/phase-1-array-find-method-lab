// code your solution here


const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
  const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
  function superbowlWin(arr) {
    const winningYear = arr.find(element => element.result === 'W');
    return winningYear ? winningYear.year : undefined;
  }
  
console.log(superbowlWin(sadReality))