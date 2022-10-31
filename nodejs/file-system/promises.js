const { access, writeFile, mkdir, readFile, appendFile, unlink, rmdir } =
  require('fs').promises

const path = './files/greet.txt'

;(async () => {
  try {
    try {
      await access('./files')
    } catch (error) {
      console.log('Folder not found, about to craete a new one!')
      await mkdir('./files')
    }
    await writeFile(path, 'Hello Promises!')
    await readFileHelper(path)
    await appendFile(path, ' Hello Promises Append!')
    await readFileHelper(path)
    await unlink(path)
    await rmdir('./files')
  } catch (error) {
    console.error(error.message)
  }
})()

async function readFileHelper(path) {
  try {
    const fileContent = await readFile(path, 'utf8')
    console.log(fileContent)
  } catch (error) {
    console.error(error.message)
  }
}
