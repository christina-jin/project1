const calcResult = (answers) => {

  const tally = {};
  answers.forEach(answer => {
    (tally[answer]) ? tally[answer]++ : tally[answer] = 1;
  })
    
  const count = Object.values(tally)
  const drink = Object.keys(tally)
  const highestCount = Math.max(...count)
  const index = count.indexOf(highestCount)

  return drink[index]
}

export default calcResult