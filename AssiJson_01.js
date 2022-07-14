var exp = require("express");
var app = exp();
var mysql = require("mysql2");
app.use(exp.static('files'));

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Dipak@1796',
	database: 'knowitdb'
});

con.connect(function (err) {
	if (!err)
		console.log('Connected to database');
});

app.listen(13000, function () { console.log("we are are at server 13000") });
app.get('/emp', function (req, res) {
	res.sendFile(__dirname + '/AssiJson_01.html');
});
app.get('/dept', function (req, res) {
	var q = "select * from emp where DEPTNO=" + req.query.DEPTNO;
	con.query(q, function (err, result) {
		if (!err) {
			res.send(JSON.stringify(result));
		}
	});
});
app.all('*', function (req, res) {
	res.send("Invlaid URL !!!");
});
