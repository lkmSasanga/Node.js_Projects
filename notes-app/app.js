const fs = require('fs')   // fs module is stored in fs object

fs.writeFileSync('notes.txt', 'My name is malindu!')

fs.appendFileSync('notes.txt', ' Hey new line added!')
