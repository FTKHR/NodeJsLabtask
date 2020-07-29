var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('admin/index');
});
router.post('/',function(req,res) {
	if(req.body.choice=="Add Employee"){
		res.redirect('/admin/addEmployee')
	}
})

router.get('/addEmployee', function (req, res) {
	res.render('admin/addEmployee');
})
module.exports = router;