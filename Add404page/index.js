




app.get('*',(req,res)=>{
    res.render('404',{
        errorMassage : "Page is not found",
    });
})