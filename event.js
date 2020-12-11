const express=require('express');

function createRouter(db)
{
    const router=express.Router();
    router.get('/event',function(req,res,next){
        db.query(
            'select * from data',
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });
//in use
    router.get('/pizza',function(req,res,next){
        db.query(
            'select * from vegpizza',
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });
//in use
    router.get('/nonvegpizza',function(req,res,next){
        db.query(
            'select * from nonvegpizza',
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });
    //in use  
    router.get('/nonvegpizza/:id',function(req,res,next){
        db.query(
            'select * from nonvegpizza where id=?',
            [req.params.id],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });

    router.get('/event/:question',function(req,res,next){
        db.query(
            'select * from data where question=?',
            [req.params.question],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });


    router.get('/reply/:id',function(req,res,next){
        db.query(
            'select * from message where question=?',
            [req.params.id],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });


 router.get('/details/:id',function(req,res,next){
        db.query(
            'select * from userdetails where userid=?',
            [req.params.id],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });
//in use
    router.get('/pizza/:id',function(req,res,next){
        db.query(
            'select * from vegpizza where id=?',
            [req.params.id],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });

//in use
    router.post('/orders',function(req,res,next){
        db.query(
            'insert into orders(id,name,size,price,crusttype,toppings,userid,total,quantity) values(?,?,?,?,?,?,?,?,?)',
            [req.body.id,
             req.body.name,
             req.body.size,
             req.body.price,
             req.body.crusttype,
             req.body.toppings,
             req.body.userid,
             req.body.total,
             req.body.quantity
            ],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });
  
     
    router.get('/orderbyid/:userid',function(req,res,next){
        db.query(
            'select * from orders where userid=?',
            [req.params.userid],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    alert("Userid doesn't exsist");
                    console.log(results)
                }
            }
        );
    });


//in use
    router.get('/custome/:name1',function(req,res,next){
        db.query(
            'select * from customise where question=?',
            [req.params.name1],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });

    //iin use
    router.get('/customeprice/:name',function(req,res,next){
        db.query(
            'select * from customprice where name=?',
            [req.params.name],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });



//in use
    router.post('/details',function(req,res,next){
        db.query(
            'insert into userdetails(userid,username,address,phone) values(?,?,?,?)',
            [req.body.userid,req.body.username,req.body.address,req.body.phone],
            (error,results)=>{
                if(error)
                {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }
                else
                {
                    res.status(200).json(results);
                    console.log(results)
                }
            }
        );
    });
    return router;
}

//inside module we have so many fields..and exports in one among them 
//..it exports from currtent file to other file..
//if we want to send data from one place to another then we use exports
module.exports=createRouter;