var Gun = require('gun/gun');

// var server = require('./server');

var http = require('http');
http.createServer(function(req, res){
  gun.get('my/first/data', function(err, data){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var gun = Gun({
  file: 'data.json',
  web: http
});

var node = gun.get('my/first/data')
node.put({ hello: 'world' })

node.val(data => {
  console.log(data)
})

var you = gun.get('kristian').put({
  name: 'Kristian'
})
var bestfriend = gun.get('bestfriend').put({
  name: 'Bob'
})
var otherfriend = gun.get('otherfriend').put({
  name: 'Jake'
})

you.path('friends').set(bestfriend)
you.path('friends').set(otherfriend)

you.path('friends').val(list => {
  console.log(list)
})
/*
    returns
    Object {_: Object, bestfriend: Object, otherfriend: Object}
*/

you.path('friends').map().val(friend => {
  console.log(friend)
})
