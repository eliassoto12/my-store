const express = require('express');
const app= express();
const port= 3000;

app.get('/',(req,res)=>{

  res.send('hola mi server en express');
})

app.get('/nueva-ruta',(req,res)=>{

  res.send('hola soy una nueva ruta');
})

app.get('/productos',(req,res)=>{
  res.json([
    {
      name:'producto 1',
      price: 1000
    },
    {
      name:'producto 2',
      price: 2000
    }


  ]);
})

app.get('/productos/:id',(req,res)=>{
  //de todos los parametros solo me interesa id
  const {id} = req.params;
  res.json({
id,
name:'producto 2',
price:2000
  })
  })

  //para realizar query o filtros
app.get('/users',(req,res)=>{
  const {limit,offset}=req.query;
if (limit && offset) {
  res.json({
    limit,
    offset
  })

} else {
res.send('no hay parametros');
}

})

app.get('/categoria/:categoriaid/productos/:productoid',(req,res)=>{
  const {categoriaid,productoid} = req.params;
  res.json({
    categoriaid,
    productoid,
      })

})

app.get('/usuario/:usuarioid/productos/:productoid',(req,res)=>{
  const {usuarioid,productoid} = req.params;
  res.json({
    usuarioid,
    productoid,
      })

})

app.listen(port,()=>{

console.log('mi port'+ port)
})
