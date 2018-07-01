let express = require('express');
let router = express.Router();

// CRUD
user.post('/users', function(req, res)
{
    res.send('What is on your mind!');
});

user.get('/users', function(req, res)
{
    res.send('you got it');
});

user.put('/users', function(req, res)
{
    res.send('you got it');
});

user.delete('/users', function(req, res)
{
    res.send('you got it');
});

let users =[
    {ID: '',
     firstName: '',
     lastName: '',
     username: '',
     password: ''}
]

router.get('/users',(req,res)=> {
    res.send(users);
})

router.post('/users',(req, res)=>{
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