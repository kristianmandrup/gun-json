var mark = gun.put({
  username: "marknadal",
  name: "Mark Nadal",
  email: "mark@gunDB.io"
});

// merge?
mark.put({
  hacker: true,
  country: "USA"
});

var amber = gun.put({
  name: "Amber Nadal",
  gender: "female",
  husband: mark
})

// invalid or not? WTF!?
// mark.wife = amber;

gun.put(mark).key('user/marknadal');
gun.get('user/marknadal').path('wife').key('user/ambernadal');

gun.get('user/ambernadal')
  .path('husband.wife.husband.wife.name')
  .val(function (name) {
    console.log(name); // "Amber Nadal"
  });