const {
  access,
  writeFile,
  mkdir,
  readFile,
  appendFile,
  unlink,
  rmdir,
} = require('fs')

const performCrud = () => {
  writeFile('./files/greet.txt', 'Hello Callbacks', (err) => {
    if (err) {
      throw err
    }
    readFile('./files/greet.txt', 'utf8', (err, fileContent) => {
      if (err) {
        console.error(err)
      }
      console.log(fileContent)
      appendFile('./files/greet.txt', ' Hello Callbacks Append', (err) => {
        if (err) {
          throw err
        }
        readFile('./files/greet.txt', 'utf8', (err, fileContent) => {
          if (err) {
            console.error(err)
          }
          console.log(fileContent)
          unlink('./files/greet.txt', (err) => {
            if (err) {
              throw err
            }
            rmdir('./files', (err) => {
              if (err) {
                throw err
              }
            })
          })
        })
      })
    })
  })
}

try {
  access('./files', (err) => {
    if (err) {
      console.error(err.message)
      mkdir('./files', (err) => {
        if (err) {
          throw err
        }
      })
    }
    performCrud()
  })
} catch (error) {
  console.error(error.message)
}
