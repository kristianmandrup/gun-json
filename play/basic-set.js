// Assumes server running?

var Gun = require('gun/gun');
var gun = Gun();

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