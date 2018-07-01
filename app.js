let express = require ('express');
let sqlite3 = require('sqlite3')
let router = express.Router();
let db = new sqlite3.Database('./Chinook_Sqlite_AutoIncrementPKs.sqlite');
let Sequelize = require('Sequelize');

// connected to db
let sequelize = new Sequelize('Music', 'frostim007', null, {
    host: 'localhost',
    dialect: 'sqlite3',
    storage: './Chinook_Sqlite_AutoIncrementPKs.sqlite'
  });

//   define schema
  const Artist = sequelize.define(
    'Artist',
    {
      ArtistId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: Sequelize.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  const Album = sequelize.define(
    'Album',
    {
      AlbumId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: Sequelize.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Artist.find({ where: { ArtistId: 75 } }).then(artists => {
    console.log(artists);
  });
  Album.find({ where: { AlbumId: 75 } }).then(artists => {
    console.log(artists);
  });
//   run server to port 5000
  app.listen(5000, () => {
    console.log ('running on 5000')

  })
db.close();
module.exports = Artist;
module.exports = Album;
module.exports = router;