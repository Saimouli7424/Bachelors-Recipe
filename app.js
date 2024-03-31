const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port =  process.env.PORT || 3000;

require('dotenv').config();

//middlewares

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));//directly no need to the links all the files will be in public folder
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout','./layouts/main'); //default layout
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js');
app.use('/',routes);

app.listen(port,()=>console.log(`Listening to port ${port}`));