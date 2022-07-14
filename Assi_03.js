// JavaScript source code
var exp = require("express");
var app = exp();
app.use(exp.static('files'));
app.listen(13000, function () { console.log("we are are at server 13000") });
app.get('/reg', function (req, res) {
	res.sendFile(__dirname + '/Assi_03.html');
});
app.get('/user', function (req, res) {
	var q = req.query.uid;
			if (q == "dipak2696")
				res.write("Already exists");
			else
				res.write("Available");
			res.end();
		
	});
app.all('*', function (req, res) {
	res.send('Invalid Url...');
});
