// code your solution here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun())


const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`;
  };

  mondayWork("I will work from home")


function wrapAdjective (flair) {
    return function (adjective = "special") {
  return `You are ${flair}${adjective}${flair}!`;
  }
}
wrapAdjective()

