const {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  appendFileSync,
  rmdirSync,
  unlinkSync,
  openSync,
  closeSync,
} = require('fs')

try {
  if (!existsSync('./files')) {
    mkdirSync('./files')
  }
  let fd = openSync('./files/greet.txt', 'w')
  writeFileSync(fd, 'Hello FD!')
  closeSync(fd)

  fd = openSync('./files/greet.txt', 'r')
  let fileContent = readFileSync(fd, 'utf8')
  console.log(fileContent)
  closeSync(fd)

  fd = openSync('./files/greet.txt', 'a')
  appendFileSync(fd, ' Hello Amir!')
  closeSync(fd)

  fd = openSync('./files/greet.txt', 'r')
  fileContent = readFileSync(fd, 'utf8')
  console.log(fileContent)
  rmdirSync('./files', { recursive: true })
} catch (error) {
  console.error(error.message)
}
