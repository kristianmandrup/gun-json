const Gun = require('gun/gun')
const gun = Gun();

var you = gun.get('kristian').put({
  name: 'Kristian'
})
var bestfriend = gun.get('bestfriend').put({
  name: 'Bob'
})
var otherfriend = gun.get('otherfriend').put({
  name: 'Jake'
})

// var friends = you.path('friends')
// friends.set(bestfriend)
// friends.set(otherfriend)

you.path('friends').set(bestfriend)
you.path('friends').set(otherfriend)

you.path('friends').val(list => {
  console.log(list); // list of your friends
})

you.path('friends').map().val(friend => {
  console.log('one of my friends is ', friend.name)
})