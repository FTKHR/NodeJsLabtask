var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('admin/index');
});
router.post('/',function(req,res) {
	if(req.body.choice=="Add Employee"){
		res.redirect('/admin/addEmployee')
	}
	if(req.body.choice=="See All Employee"){
		res.redirect('/admin/allEmployeeList')
	}
})

router.get('/addEmployee', function (req, res) {
	res.render('admin/addEmployee');
})
router.get('/allEmployeeList',function (req,res) {
	var employee1={
		id:1,
        name:'Iftekhar',
        phone:'012345678910',
        adress:'Mirpur',
        gender:'Male',
        designation:'Engineer'
	}
	var employee2={
		id:2,
        name:'Alam',
        phone:'016745678910',
        adress:'Uttara',
        gender:'Male',
        designation:'Manager'
	}
	var data={
		first:employee1,
		second:employee2
	}
	res.render('admin/allEmployee',data);
})
router.post('/allEmployeeList',function(req,res) {
	if(req.body.choice=="update"){

	}
	if(req.body.choice=="delete"){
		
	}
	
})
module.exports = router;