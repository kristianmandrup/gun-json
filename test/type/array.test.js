import Gun from 'gun/gun'
import test from 'ava'

const gun = Gun();

test('fromArray', t => {
  t.pass()
})

test.cb('toArray', t => {
  // t.plan(1)

  let cb = (data) => {
    console.log(data.name)
    t.deepEqual(data.name, 'zeta')
    t.end()
  }

  let mike = gun.get('mike')
  mike.put({
    name: 'mike'
  })
  let friend = mike.path('friend')
  friend.put({
    name: 'anna'
  })
  console.log('friend', friend)
  friend.val(cb)
  mike.path('friend').val(cb)

  mike.val((data) => {
    console.log('mike', data)
    console.log('fields', Object.keys(data))
  })

  // console.log('get mike friend')
  // mike.path('friend').val((data) => {
  //   console.log(data)
  //   console.log(data.name)
  //   t.deepEqual(data.name, 'zeta')
  //   t.end()
  // })
})