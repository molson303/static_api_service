var data = require('./names')


module.exports = {
  getAllUsers: function () {
    return data;
  },
  getAllActiveUsers: function () {
    var bucket = []
    for (var i = 0; i < data.length; i++) {
      var activeUsers = data[i].user_data.active
      if(activeUsers === 1){
        bucket.push(data[i].user_data)
      }
    }
    return bucket;
  },
  getOneUser: function () {
    //here we get one user based on their id- this is the stretch goal.
  }
}
