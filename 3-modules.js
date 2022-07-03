// Modules

//CommonJs, every file in node is module (by default)
//Modules - encapsulated code (only share minimun)

const name = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// console.log(data)

require('./7-mind-grenade')


sayHi('susan')
sayHi(name.juan)
sayHi(name.pedro)
