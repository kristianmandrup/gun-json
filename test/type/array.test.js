// import Gun from 'gun/gun'
// import test from 'ava'

const Gun = require('gun/gun')

const gun = Gun();

// test('fromArray', t => {
//   t.pass()
// })

// test.cb('toArray', t => {
// t.plan(1)

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

// you.val(data => {
//   console.log('data', data)
// })

// })

// test.cb('toArray random keys', t => {
//   var you = gun.get('kristian').put({
//     name: 'Kristian'
//   })

//   you.path('friends').set({
//     name: 'Bob'
//   })
//   you.path('friends').set({
//     name: 'Jake'
//   })

//   you.val(data => {
//     console.log('data', data)

//     t.end()
//   })
// })