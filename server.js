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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.use('/api',routes)
routes.get('/',(req,res)=>{
    res.send('Bienvenidos a mi api')
})
app.listen(app.get('port'),()=>{
    console.log('servidor corriendo en el puerto',app.get('port'))
})
