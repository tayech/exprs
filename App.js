// load the things we need
var express = require('express');
var app = express();

function construct(req,res,next){
    
    //get current date
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    // get hour
    var hourDate = d.getHours();
    
    if( ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(dayName) && (hourDate >= 9 && hourDate <= 17) ){
        next();
    }else{
        res.render('pages/horsService', {
            namePage: "horsService"
        });
       
    }

}

// set the view engine to ejs
app.set('view engine', 'ejs');
// index page
app.get('/',construct, function(req, res) {
    
   
    res.render('pages/index', {
        namePage: "Home"
    });
});

// about page
app.get('/service', function(req, res) {
    res.render('pages/index', {
        namePage: "Service"
    });
});

// about page
app.get('/contact', function(req, res) {
    res.render('pages/index', {
        namePage: "Contact"
    });
});

app.listen(4000);
console.log('4000 is the magic port');