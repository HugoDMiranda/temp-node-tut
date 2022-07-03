const {readFile, writeFile} = require('fs');

console.log('start')

readFile('./content/first.txt','utf8', (err, res) => {
  if(err){
    console.log(err)
    return
  }
  const first = res;
  readFile('./content/first.txt','utf8', (err, res) => {
    if(err){
      console.log(err)
      return
    }
    const second = res;
    writeFile(
      './content/result-sync.txt',
       `here is the result : ${first}, ${second}`,
       (err, res) => {
        if(err) {
          console.log(err)
          return
        }
        console.log(res, 'done with this')
       }
      )
  })
})

console.log('starting with new task')