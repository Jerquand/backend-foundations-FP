let express = require('express');
let router = express.Router();
let user = require('./user')


// API 
user.post('/users', (req, res) => {
    user.create(
        {Name: req.body.name}
    )
    res.sendStatus(200)
});

user.get('/users', (req, res) => {
    user.findAll().then(users =>{
        res.json(user)
    });
});

user.get('/users/:id', (req, res) => {
    user.find({
        where:{
            UserId: req.params.id
        }
    }).then(users =>{
        res.json(user)
    });
});

router.post('/users',(req, res)=>{
    users.push(req.body);
    res.send(users);
});

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

});

module.exports = user;
module.exports = router;