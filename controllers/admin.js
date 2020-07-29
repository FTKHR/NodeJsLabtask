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
		res.redirect('update/'+req.body.getID);
	}
	if(req.body.choice=="delete"){
		res.redirect('delete/'+req.body.getID);
	}
	
})
router.get('/update/:id',function(req,res) {
	if(req.params.id=='1'){
		data={
			id:1,
			name:'Iftekhar',
			phone:'012345678910',
			adress:'Mirpur',
			gender:'Male',
			designation:'Engineer'
		}
		res.render('admin/update',data);
	}
	if(req.params.id=='2'){
		var data={
			id:2,
			name:'Alam',
			phone:'016745678910',
			adress:'Uttara',
			gender:'Male',
			designation:'Manager'
		}
		res.render('admin/update',data);
	}
	
})
router.get('/delete/:id',function(req,res) {
	if(req.params.id=='1'){
		data={
			id:1,
			name:'Iftekhar',
			phone:'012345678910',
			adress:'Mirpur',
			gender:'Male',
			designation:'Engineer'
		}
		res.render('admin/delete',data);
	}
	if(req.params.id=='2'){
		var data={
			id:2,
			name:'Alam',
			phone:'016745678910',
			adress:'Uttara',
			gender:'Male',
			designation:'Manager'
		}
		res.render('admin/delete',data);
	}
	
})
module.exports = router;