
var crypto = require('crypto')

module.exports = random

function random(max, min) {
  min = min || 0

  if(!isNumber(max)) {
    return 0
  }

  if(min >= max) {
    return max
  }

  var range = (max - min) + 1
    , bytes = 1

  while(Math.pow(2, bytes * 8) <= range) {
    bytes++
  }

  var cutoff = Math.floor(Math.pow(2, bytes * 8) / range) * range - 1
    , buf    = null
    , num    = cutoff + 1

  while(num > cutoff) {
    try {
      buf = crypto.randomBytes(bytes)
    } catch(err) {
      buf = crypto.pseudoRandomBytes(bytes)
    }
    num = 0
    for(var i = 0; i < bytes; i++) {
      num += (buf.readUInt8(i) << 8 * (bytes - i - 1))
    }
  }
  return (num % range) + min
}

function isNumber(num) {
  return typeof num === 'number'
}
