/* global describe, it, expect, peopleWithAgeDrink */

describe('function peopleWithAgeDrink', function () {
  it('should be defined', function () {
    expect(peopleWithAgeDrink).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof peopleWithAgeDrink).toBe("function")
  })
  describe('should return "drink toddy" for ages less than 14', function () {
    it('should return "drink toddy" when peopleWithAgeDrink(13)', function () {
      var result = peopleWithAgeDrink(13)
      expect(result).toBe("drink toddy")
    })
  })
  describe('should return "drink coke" for ages less than 18', function () {
    it('should return "drink coke" when peopleWithAgeDrink(17)', function () {
      var result = peopleWithAgeDrink(17)
      expect(result).toBe("drink coke")
    })
  })
  describe('should return "drink beer" for ages less than 21', function () {
    it('should return "drink beer" when peopleWithAgeDrink(18)', function () {
      var result = peopleWithAgeDrink(18)
      expect(result).toBe("drink beer")
    })
    it('should return "drink beer" when peopleWithAgeDrink(20)', function () {
      var result = peopleWithAgeDrink(20)
      expect(result).toBe("drink beer")
    })
  })
  describe('should return "drink whisky" for ages higher than 21', function () {
    it('should return "drink whisky" when peopleWithAgeDrink(30)', function () {
      var result = peopleWithAgeDrink(30)
      expect(result).toBe("drink whisky")
    })
  })
})
