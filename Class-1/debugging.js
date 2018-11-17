var priorities = []
var ADD = 'add new'
var HIGHER = 'higher'
var LOWER = 'lower'
var LIST = 'list'
var whatToDoOptions = [ADD, HIGHER, LOWER, LIST]

function addNewPriority(name, level) {
  priorities.push({name: name, level: level})
}

function makeHigherPriority(name) {
  var priority = priorities.find(p => p.name === name)
  priority.level = priority.level - 1
}

function makeLowerPriority(name) {
  var priority = priorities.find(p => p.name === name)
  priority.level = priority.level + 1
}

function drawPriorities() {
  if (priorities.length === 0) {
    console.log("no priorities yet you lazy bum!")
  } else {
    console.log(priorities.map(function (p) { return prettyPriority(p) }).join("\n"))
  }
}

function prettyPriority(priority) {
  return `${priority.level}: ${priority.name}`
}

drawPriorities()
addNewPriority("study for ok coders", 2)
addNewPriority("family and friends", 1)
makeHigherPriority("study for ok coders")
makeLowerPriority("family and friends")
drawPriorities()