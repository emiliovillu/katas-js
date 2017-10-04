function scoreTenis (games) { // eslint-disable-line
  var aPoints = games.split('')
  var score = aPoints.reduce(function (acc, point) {
    if (point === 'a' && acc.a === 'duece' && acc.b === 'duece') {
      acc.a = 'advantage'
      acc.b = 'forty'
      return acc
    }

    if (point === 'b' && acc.b === 'duece' && acc.a === 'duece') {
      acc.b = 'advantage'
      acc.a = 'forty'
      return acc
    }
    if (point === 'a' && acc.a === 'thirty' && acc.b === 'forty') {
      acc.a = 'duece'
      acc.b = 'duece'
      return acc
    }

    if (point === 'b' && acc.b === 'thirty' && acc.a === 'forty') {
      acc.a = 'duece'
      acc.b = 'duece'
      return acc
    }

// JUEGO GANADO Ó AVANTAGE
    if (point === 'b' && acc.b === 'duece' && acc.a === 'duece') {
      acc.b = 'advantage'
    } else if (point === 'b' && acc.b === 'forty') {
      acc.b = 'win game'
    }
    if (point === 'a' && acc.a === 'duece' && acc.b === 'duece') {
      acc.a = 'advantage'
    } else if (point === 'a' && acc.a === 'forty') {
      acc.a = 'win game'
    }

// DE 30 A 40

    if (point === 'b' && acc.b === 'thirty' && acc.a !== 'forty') {
      acc.b = 'forty'
    }
    if (point === 'a' && acc.a === 'thirty' && acc.b !== 'forty') {
      acc.a = 'forty'
    }

// DE 15 A 30

    if (point === 'b' && acc.b === 'fifteen') {
      acc.b = 'thirty'
    }
    if (point === 'a' && acc.a === 'fifteen') {
      acc.a = 'thirty'
    }
// DE 0 ==> 15

    if (point === 'b' && acc.b === 'love') {
      acc.b = 'fifteen'
    }
    if (point === 'a' && acc.a === 'love') { 
      acc.a = 'fifteen'
    }

    return acc
  }, {a: 'love', b: 'love'})

  return score
}
