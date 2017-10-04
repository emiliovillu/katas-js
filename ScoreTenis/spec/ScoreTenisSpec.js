/* global describe, it, expect, scoreTenis */

describe('function scoreTenis', function () {
  it('should be defined', function () {
    expect(scoreTenis).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof scoreTenis).toBe('function')
  })
  describe('Start game ', function () {
    it('now game start with both love', function () {
      expect(scoreTenis('')).toEqual({a: 'love', b: 'love'})
    })
  })
  describe('First point "a" ', function () {
    it('Only play "a" a fifteen', function () {
      expect(scoreTenis('a')).toEqual({a: 'fifteen', b: 'love'})
    })
  })
  describe('"a" and "b" both fifteen  ', function () {
    it('play "a" and "b" both fifteen', function () {
      expect(scoreTenis('ab')).toEqual({a: 'fifteen', b: 'fifteen'})
    })
  })
  describe('Second point "a" and "b" in fifteen', function () {
    it('double win "a", one win "b"', function () {
      expect(scoreTenis('aab')).toEqual({a: 'thirty', b: 'fifteen'})
    })
  })
  describe('Third point "a" and "b" in fifteen', function () {
    it('triple win "a", one win "b"', function () {
      expect(scoreTenis('aaab')).toEqual({a: 'forty', b: 'fifteen'})
    })
  })
  describe('Fourth point "a" and "b" in fifteen, win "a"', function () {
    it('quadruple win "a", one win "b"', function () {
      expect(scoreTenis('aaaab')).toEqual({a: 'win game', b: 'fifteen'})
    })
  })
  describe('Triple point "a" and "b" win both in duece', function () {
    it('triple win "a", and "b" both', function () {
      expect(scoreTenis('aaabbb')).toEqual({a: 'duece', b: 'duece'})
    })
  })
  describe('Quadruple point "a" and Third "b", advantage for "a"', function () {
    it('quadruple win "a", triple win "b", "a" gets advantage', function () {
      expect(scoreTenis('abababa')).toEqual({a: 'advantage', b: 'forty'})
    })
  })
})
