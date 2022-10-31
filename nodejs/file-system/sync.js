const {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  appendFileSync,
  rmdirSync,
  unlinkSync,
} = require('fs')

try {
  if (!existsSync('./files')) {
    mkdirSync('./files')
  }
  writeFileSync('./files/greet.txt', 'Hello World!')
  let fileContent = readFileSync('./files/greet.txt', 'utf8')
  console.log(fileContent)
  appendFileSync('./files/greet.txt', ' Hello FS!')
  fileContent = readFileSync('./files/greet.txt', 'utf8')
  console.log(fileContent)
  unlinkSync('./files/greet.txt')
  rmdirSync('./files')
} catch (error) {
  console.error(error.message)
}
