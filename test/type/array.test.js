import Gun from 'gun/gun'
import test from 'ava'

const gun = Gun();

test('fromArray', t => {
  t.pass()
})

test.cb('toArray', t => {
  // t.plan(1)

  var you = gun.get('kristian').put({
    name: 'Kristian'
  })
  var bestfriend = gun.get('bestfriend').put({
    name: 'Bob'
  })
  var otherFriend = gun.get('otherfriend').put({
    name: 'Jake'
  })

  you.path('friends').set(bestfriend)
  you.path('friends').set(otherfriend)

  var you = gun.get('kristian').put({
    name: 'Kristian'
  })
  you.path('friends').set({
    name: 'Bob'
  })
  you.path('friends').set({
    name: 'Jake'
  })
})