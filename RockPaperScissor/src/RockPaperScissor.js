
function rockPaperScissor (option1, option2) { // eslint-disable-line
  if (option1 === option2) {
    return 'TIE'
  }
  if ((option1 === 'Rock' && option2 === 'Paper') || option1 === 'Paper' && option2 === 'Rock') {
    return 'Paper wins'
  }
  if ((option1 === 'Scissor' && option2 === 'Paper') || option1 === 'Paper' && option2 === 'Scissor' ) {
    return 'Scissor wins'
  }
  if ((option1 === 'Rock' && option2 === 'Scissor') || option1 === 'Scissor' && option2 === 'Rock' ) {
    return 'Rock wins'
  }
}
