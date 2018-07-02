let express = require ('express');
let sqlite3 = require('sqlite3')
let router = express.Router();
let db = new sqlite3.Database('./Chinook_Sqlite_AutoIncrementPKs.sqlite');
let Sequelize = require('Sequelize');
let app = require ('express');
let passport = require('passport')
let bodyParser = require ('body-parser')
let authorId = require('./user')
app.use(bodyParser.json());


// connected to db
let sequelize = new Sequelize('Music', 'frostim007', null, {
    host: 'localhost',
    dialect: 'sqlite3',
    storage: './Chinook_Sqlite_AutoIncrementPKs.sqlite'
  });

// CRUD
app.post('/author', (req, res) => {
  authorId.create(
      {Name: req.body.id}
  )
  res.sendStatus(200)
});

user.get('/author', (req, res) => {
  authorId.findAll().then(authorId =>{
      res.json(authorId)
  });
});

app.put('/author', (req, res) => {
  res.json(authorId);
});

app.delete('/author', (req, res) => {
  res.json(authorId);
});



//   define schema
  const Post = sequelize.define(
    "Post",
    {
      authorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      message: Sequelize.STRING
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  );
  const User = sequelize.define(
    "Users",
    {
      UserId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      userName: Sequelize.STRING,
      password: Sequelize.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  passport.serializeUser((user,done)=> {
    done(null,user._id);
  });

  passport.deserializeUser((id, done) => {
    user.findAll(
      {
        where: {
          userId: id
        }
      },
      (err, user) => {
        if (err || !user) return done(err, null);
        done(null, user);
      }
    );
  });

  Post.find({ where: { UserId: '' } }).then(User => {
    console.log(user);
  });
  User.find({ where: { UserId: '' } }).then(User => {
    console.log(user);
  });

//   run server to port 4000
  app.listen(4000, () => {
    console.log ('running on 4000')

  })
db.close();
module.exports = Post;
module.exports = Users;
module.exports = router;