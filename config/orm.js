var connection = require("./connections.js")

var orm = {
    //displays the entire list from the burgers table.
   selectAll: function(cb) {
    var query = "SELECT * FROM burgers";
    connection.query(query, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }, 
  //inserting one burger into the burgers table via UI.
  insertOne: function(burger_name, cb) {
    var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    connection.query(query, [burger_name], function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  //changes the boolean of "devoured"
  updateOne: function(burgerID, cb) {
    var query = "UPDATE burgers SET devoured= ' ' + true + ' ' WHERE id=?";
    connection.query(query, [burgerID], function(err, res) {
      if (err) throw  err;
      cb(res);
    });
  },
  deleteOne: function(burgerID, cb) {
    var query = "DELETE FROM burgers WHERE ID = ? ";
    connection.query(query, [burgerID], function (err, res) {
      if(err) throw err;
      cb(res);
    });
  }
}

module.exports = orm;