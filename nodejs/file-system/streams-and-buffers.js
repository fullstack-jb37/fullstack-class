const { createReadStream, createWriteStream } = require('fs')

const readStream = createReadStream(`${__dirname}/huge-file.txt`, 'utf8')
const writeStream = createWriteStream(`${__dirname}/write-huge-file.txt`)

// readStream.on('data', (chunk) => {
//   console.log('new chunk')
//   console.log(chunk)
//   writeStream.write('\nnew chunk\n')
//   writeStream.write(chunk)
// })

readStream.pipe(writeStream)
