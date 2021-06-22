const Model = function(){
    const connection = require('../config/database');

    return {
        run: function(sql, obj, callback){
            connection.config.queryFormat = function (query, values) {
                if (!values) return query;
                return query.replace(/\:(\w+)/g, function (txt, key) {
                  if (values.hasOwnProperty(key)) {
                    return this.escape(values[key]);
                  }
                  return txt;
                }.bind(this));
            };
            // connection.query("sql구문", 객체, 콜백함수);
            connection.query(sql, obj, function(err, rows){
                callback(err, rows);
            });
        },
    }

}

module.exports = Model();