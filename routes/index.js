var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chat.html', function(req, res, next) {
  res.render('chat', { title: 'Express' });
});

var on_content;
var on_name;
var on_data;
var cookie_count = 0;
var userdb = new Array();
var username;
router.post('/user_login', function(req, res, next) {
  username = req.body.name;
  var pass = req.body.pass;
  res.cookie(req.body.name + cookie_count, 'password=pass');
  cookie_count++;
 // console.log("当前Cookies: ", req.headers.cookie);
  res.render('chat', { title: 'Express' });
});

router.post('/chat_sendmsg', function(req, res, next) {
  //console.log(req.body);
 // console.log("发送Cookies: ", req.headers.cookie);
  on_content = req.body.content;
//  on_name = Session[login_user];
  on_data = req.body.d;
  var Cookies = {};
    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        on_name = parts[ 0 ].trim()
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    //console.log("解析: ",com_name);
});

router.post('/chat_getmsg', function(req, res, next) {
	var getmsg = {
		'name':on_name,
		'word':on_content,
		'date':on_data
	};
	on_name = '';
	on_content = '';
	on_data = '';

    res.send(getmsg);
    getmeg = {};
});

router.post('/online_list', function(req, res, next) {
	//res.send(on_data);
	//res.redirect("/");
  //console.log(req.body.name);
 // console.log(req.body.pass);
  //res.render('index', { title: 'Express' });
 // res.send(true);
});

module.exports = router;
