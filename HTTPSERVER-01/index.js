const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let User=[{
  name:"john",
      Kidney:[{
        healthy:false
      },
      {
      healthy:true
      }]
}]


  app.get('/', (req, res) => {

      const userarray=User[0].Kidney;
      let noofkidney=userarray.length;
      const healthykidneyarray=userarray.filter(function(obj){
            if(obj.healthy) return true;
        return false;
      })

      const healthykidney=healthykidneyarray.length;
        const unhealthykidney=noofkidney-healthykidney;
      res.json({noofkidney,healthykidney,unhealthykidney});

  })

app.post('/', (req, res) => {

     const ishelth=req.body.health;
    //  console.log(User[0].Kidney.length);
     User[0].Kidney.push({
      healthy:ishelth
     })

    //  console.log(User[0].Kidney.length);
     res.json({ 
      msg:"done"
     })

})
app.put('/', (req, res) => {

  for(let i=0;i<User[0].Kidney.length;i++){
    User[0].Kidney[i]=true;
  }
  res.json({})
})
app.delete('/', (req, res) => {
    
  const newarr=User[0].Kidney.filter(function(obj){
    if(obj.healthy) return true;
    return false;
  })
  User[0].Kidney=newarr;
  res.status(321).json({
    msg:"done deletion"
  })

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})