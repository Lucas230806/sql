const express = require ('express');
const exphbs = require ('express-handlebars');

const conn = require('./db/conn')

const User = require('./models/User')

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.use(express.static('public'));

//motsrt o fomrluario
app.get('/users/create', (req, res)=>{
  return res.render('adduser')
})

//cadastrar usuario
app.post('/users/create', async (req, res)=>{
 const {name, occupation} = req.body
 let newsletter = req.body.newsletter

 if(newsletter === 'on'){
  newsletter = true
 } else {
  newsletter = false
 }
 console.log(req.body)
 //inserir
 await User.create({name, occupation, newsletter})

 return res.redirect('/')
})

app.get('/', async (req, res)=>{

  const users = await User.findAll({raw:true})
  //console.log(users)
    return res.render('home',{users});
});

conn
.sync()
.then(() => {
    app.listen(3333, () => {
      console.log(`SERVIDOR ON`);
    });
})
.catch((error)=> console.log(error));




