const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let words = []
  for (let i = 0; i < expr.length; i += 10) {
    words.push(expr.slice(i, 10 + i))
  }

  let decoded = words.map((el) => {
    let tempEl = el
    let dottedWord = ''
    if (el === '**********') {
      return ' '
    }
    while (tempEl.slice(0, 2) === '00') {
      tempEl = tempEl.slice(2, tempEl.length)
    }
    for (let i = 0; i < tempEl.length; i += 2) {
      if (tempEl.slice(i, 2 + i) === '10') {
        dottedWord += '.'
      } else {
        dottedWord += '-'
      }
    }
    return dottedWord
  })
  let endPhrase = ''
  decoded.forEach(
    (el) =>
      (endPhrase = MORSE_TABLE[el]
        ? endPhrase + MORSE_TABLE[el]
        : endPhrase + ' ')
  )
  return endPhrase
}

module.exports = {
  decode,
}
