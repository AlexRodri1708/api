
const express=require('express')
const routes=express.Router()


routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('SELECT * FROM usuario',(err,rows)=>{
            if(err) return res.send(err)
            else
            res.json(rows) 
        
        })
       }
    })
})

routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('INSERT INTO usuario set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.send('usuario registrado') 
        
        })
       }
    })
})
routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('DELETE FROM usuario WHERE id=?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.send('usuario eliminado') 
        
        })
       }
    })
})

routes.get('/:email',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('SELECT *FROM usuario WHERE email=?',[req.params.email],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.json(rows) 
        })
       }
    })
})
routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('UPDATE usuario set? WHERE id=?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.send('usuario actualizado') 
        
        })
       }
    })
})

routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('SELECT * FROM comentarios',(err,rows)=>{
            if(err) return res.send(err)
            else
            res.json(rows) 
        
        })
       }
    })
})

routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('INSERT INTO comentarios set ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.send('comentario registrado') 
        
        })
       }
    })
})
routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('DELETE FROM comentarios WHERE id_c= ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.send('comentario eliminado') 
        
        })
       }
    })
})
routes.get('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('SELECT *FROM comentarios WHERE id_c=?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.json(rows) 
        })
       }
    })
})
routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)
      else{
    
        conn.query('UPDATE comentarios set? WHERE id_c=?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)
            else
            res.send('comentario actualizado') 
        
        })
       }
    })
})
module.exports=routes