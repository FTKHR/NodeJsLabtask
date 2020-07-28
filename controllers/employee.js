var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('employee/index');
});

router.post('/', function(req, res){

	if(req.body.choice=="MyProfile"){
		res.redirect('/employee/profile');
    }
    else if(req.body.choice=="UpdateProfile"){
		res.redirect('/employee/update');
    }
	
});
router.get('/profile',function(req,res){
    var data={
        name:'Iftekhar',
        phone:'012345678910',
        designation:'Engineer'
    }
    res.render('employee/profile',data);
});
router.get('/update',function(req,res){
    var data={
        name:'Iftekhar',
        phone:'012345678910',
        designation:'Engineer'
    }
    res.render('employee/update',data);
});
router.post('/update', function(req, res){

	var data={
        name : req.body.name,
        phone : req.body.phone,
        designation : req.body.designation
    }
    res.render('employee/profile',data);
	
});


module.exports = router;