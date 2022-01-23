const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const app=express()
const routes=require('./routes')
app.set('port',process.env.PORT || 9000)

const dbOptions={
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'usuarios'
}
//middlerwares
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())

app.use('/api',routes)
routes.get('/',(req,res)=>{
    res.send('Bienvenidos a mi api')
})
app.listen(app.get('port'),()=>{
    console.log('servidor corriendo en el puerto',app.get('port'))
})
