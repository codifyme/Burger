var orm = require('../config/orm.js');
var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  getMenu: function(cb) {
    orm.selectAll('menu', function(res) {
      cb(res);
    });
  },
  insertOne: function(val, cb) {
    orm.insertOne('burgers', 'burger_name', val, function(res) {
      cb(res);
    });
  },
  updateOne: function(colVal, conditionVal, cb) {
    orm.updateOne('burgers', 'devoures', colVal, 'id', conditionVal, function(
      res
    ) {
      cb(res);
    });
  },
  deleteOne: function(conditioVal, cd) {
    orm.deleteOne('burgers', 'id', conditionVal, function(res) {
      cd(res);
    });
  }
};

module.exports = burger;
