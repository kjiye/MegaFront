const Model = function () {
  const database = require('../config/database');

  return {
    execute: (sql, obj, callback) => {
      // console.log(sql);

      database.config.queryFormat = function (query, values) {
        if (!values) return query;
        return query.replace(
          /\:(\w+)/g,
          function (txt, key) {
            if (values.hasOwnProperty(key)) {
              return this.escape(values[key]);
            }
            return txt;
          }.bind(this)
        );
      };

      database.query(sql, obj, (err, rows) => {
        callback(err, rows);
      });

    },
    end: () => {
      database.end();
    },
  };
};

module.exports = Model();
