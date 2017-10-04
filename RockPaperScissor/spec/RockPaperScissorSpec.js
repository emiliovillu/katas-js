/* global describe, it */
describe('function rockPaperScissor', function () {
  it('should be defined', function () {
    expect(rockPaperScissor).toBeDefined()
  })
  it('should be function', function () {
    expect(typeof rockPaperScissor).toBe('function')
  })
  it('should be return a string', function () {
    expect(typeof rockPaperScissor('paper', 'paper')).toBe('string')
  })
  describe('with options equale, say TIE', function () {
    it('if we declare two options equal return tie', function () {
      var option1 = 'Rock'
      var option2 = 'Rock'
      expect(rockPaperScissor(option1, option2)).toBe('TIE')
    })
  })
  describe('Rock vs Paper, wins Paper', function () {
    it('if option1 is Paper and option2 is Rock, or viseverse win Paper', function () {
      var option1 = 'Rock'
      var option2 = 'Paper'
      expect(rockPaperScissor(option1, option2)).toBe('Paper wins')
    })
  })
  describe('Scissor vs Paper, wins Scissor', function () {
    it('if option1 is Scissor and option2 is Paper, or viseverse win Rock', function () {
      var option1 = 'Scissor'
      var option2 = 'Paper'
      expect(rockPaperScissor(option1, option2)).toBe('Scissor wins')
    })
  })
  describe('Rock vs Scissor, wins Rock', function () {
    it('if option1 is Rock and option2 is Paper, or viseverse win Rock', function () {
      var option1 = 'Rock'
      var option2 = 'Scissor'
      expect(rockPaperScissor(option1, option2)).toBe('Rock wins')
    })
  })
})
