const str = `早点下班，回家吃饭，吃完散步，STEAM ON!`

function wordToBinary(str = '') {
  return str
    .split('')
    .map(x => x.charCodeAt().toString(2))
    .join(' ')
}

function binaryToWord(str = '') {
  return str
    .split(' ')
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join('')
}

var foo = wordToBinary(str)
var bar = binaryToWord(foo)
console.log(foo)
