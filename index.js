function findMatching(drivers, str){
  return drivers.filter(n => {
    return n.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(n => {
    return n[0] === str[0]
  })
}

function matchName(drivers, str) {
  return drivers.filter(n => {
    return n.name.toLowerCase() === str.toLowerCase()
  })
}
