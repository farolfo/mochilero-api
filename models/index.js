if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_WHITE_URL) {
    // the application is executed on Heroku
    var match = process.env.HEROKU_POSTGRESQL_WHITE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

    sequelize = new Sequelize(match[5], match[1], match[2], {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging:  true
    });
  } else {
    // the application is executed on local
    var LOCAL_DB_URL = "postgres://mochilero:123456@localhost:5432/mochilero-db"
    var match = LOCAL_DB_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

    sequelize = new Sequelize(match[5], match[1], match[2], {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging:  true
    });
  }

  global.db = {
      Sequelize: Sequelize,
      sequelize: sequelize,
      User:      sequelize.import(__dirname + '/user')
  };
}

module.exports = global.db;
