function fizzBuzz () {
  return Array(100).fill(0).map(function (item, index) {
    var number = index + 1
    var isMultipleBy3 = (number % 3 === 0)
    var isMultipleBy5 = (number % 5 === 0)
    var itContain3 = (number + '').includes('3')
    if (isMultipleBy3 && isMultipleBy5) { return 'FizzBuzz' }
    if (isMultipleBy3 || itContain3) { return 'Fizz' }
    if (isMultipleBy5) { return 'Buzz' }
    return number
  }).some(function (item) {
      item.includes()

  })
}
