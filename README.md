random-number-generator
=======================

This module leverages the node crypto module to generate random integers within a range.

The crypto module uses /dev/random and /dev/urandom to produce random bytes on unix-y systems.

##usage

#### random( max [, min])

```javascript
    var random = require('random-number-generator')
    
    console.log( random(100) )    // random integer between 0 and 100
    console.log( random(50, 10) ) // random integer between 10 and 50
```