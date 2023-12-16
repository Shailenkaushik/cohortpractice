const express = require('express')
const app = express()
const port = 3000


function calc(n){
  let ans=0;
  for(let i=0;i<=n;i++){
    ans+=i;
  }
  return ans;
}


app.get('/how', (req, res) => {

  let n=req.query.n;
  let a=calc(n);
  res.send(a.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})