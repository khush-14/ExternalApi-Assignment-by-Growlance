const express = require ('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const { route } = require('express/lib/application');
const PORT =3000;
const routes = require("./routes/user");

app.set(expressLayouts)
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',routes);

app.listen(PORT,(req,res)=>{
   console.log("server stated");
})
