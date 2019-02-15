// page.js
Page({
  data: {
    msg: 'Hello MINA!',
    array: [1, 2, 3, 4, 5],
    jj: 'MINA',
    staffA: {
      firstName: 'Hulk',
      lastName: 'Hu'
    },
    staffB: {
      firstName: 'Shang',
      lastName: 'You'
    },
    staffC: {
      firstName: 'Gideon',
      lastName: 'Lin'
    },
    count: '我很开心'
  },
  add(e) {
    this.setData({
      count: this.data.count +  '   傻比'
    })
  }
})