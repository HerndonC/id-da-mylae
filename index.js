const { name } = require('ejs');
const express = require('express')
const path=require('path')
const app = express()
const bodyParser = require('body-parser');

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'static')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.render('index')
})
 
app.get('/recommendations', function (req, res) {
    res.render('recommendations')
})

app.get('/blog', function (req, res) {
    res.render('blog')
})

app.get('/contact', function (req, res) {
    res.render('contact', { serverResponse :``})
  })

app.post('/form', function(req, res) {
    var name=`${req.body.fname} ${req.body.lname}`
    // console.log('login attempt made for ' + req.body.email);
    console.log(`This is the information on the form:\nFirst Name\nLast Name\nE-mail:${name}`);
    res.render('contact', { serverResponse :`Thanks for reaching out to me!:name:${name}` });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 80;
}
app.listen(port);

