const { access, writeFile, mkdir, readFile, appendFile, unlink, rmdir, open } =
  require('fs').promises

const main = async (path) => {
  try {
    try {
      await access('./files')
    } catch (error) {
      console.log('Folder not found, about to craete a new one!')
      await mkdir('./files')
    }
    await performCrud('w', path, 'Hello FD Promises!')
    await performCrud('r', path)
    await performCrud('a', path, ' Hello FD Promises Append!')
    await performCrud('r', path)
    await unlink(path)
    await rmdir('./files')
  } catch (error) {
    console.error(error.message)
  }
}

async function performCrud(flag, path, content = null) {
  let fd
  switch (flag) {
    case 'w':
      fd = await open(path, 'w')
      await writeFile(fd, content)
      await fd.close()
      break
    case 'r':
      fd = await open(path, 'r')
      await readFileHelper(fd)
      await fd.close()
      break
    case 'a':
      fd = await open(path, 'a')
      await appendFile(fd, content)
      await fd.close()
    default:
      break
  }
}

async function readFileHelper(fd) {
  try {
    const fileContent = await readFile(fd, 'utf8')
    console.log(fileContent)
  } catch (error) {
    console.error(error.message)
  }
}

main('./files/greet.txt')
