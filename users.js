let express = require('express');
let router = express.Router();

// CRUD
app.post('/', function(req, res)
{
    res.send('you got it');
});

app.get('/', function(req, res)
{
    res.send('you got it');
});

app.put('/', function(req, res)
{
    res.send('you got it');
});

app.delete('/', function(req, res)
{
    res.send('you got it');
});

let users =[
    {name:'Quan', id: '1'},
    {name:'Ben', id:'2'}
]

router.get('/',(req,res)=> {
    res.send(users);
})

router.post('/',(req, res)=>{
    users.push(req.body);
    res.send(users);
})

router.put('/',(req,res)=>{
    for(let i = 0; i , users.length; i++) {
        if (users[i].id === req.body.id){
            users[i].name = req.body.name;
            res.send(users);
            break;
        } else {
            continue;
        }
    }

})

module.exports = router;