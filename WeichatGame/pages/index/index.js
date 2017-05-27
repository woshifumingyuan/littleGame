//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list: [{
        id: 1,
        name: 1,
        open: false
      },{
        id:2,
        name:2,
        open: false
      },{
        id:3,
        name:3,
        open: false
      },{
        id:4,
        name:4,
        open: false
      },{
        id:5,
        name:5,
        open: false
      },{
        id:6,
        name:6,
        open: false
      },{
        id:7,
        name:7,
        open: false
      },{
        id:8,
        name:8,
        open: false
      },{
        id:9,
        name:9,
        open: false
      },{
        id:10,
        name:10,
        open: false
      },{
        id:11,
        name:11,
        open: false
      },{
        id:12,
        name:12,
        open: false
      },{
        id:13,
        name:13,
        open: false
      },{
        id:14,
        name:14,
        open: false
      },{
        id:15,
        name:15,
        open: false
      },{
          id:16,
          name:16,
          open: false}
    ]
  },
  //事件处理函数
  kindToggle: function(e) {
    var d = e.currentTarget.id, list = this.data.list;
    for(var i = 0; i < list.length ; i++){
      if(list[i].id == d ){
        list[i].open = !list[i].open;
        if (list[i].id != 1 && list[i].id != 5 && list[i].id != 9 && list[i].id != 13 )
        list[i-1].open=!list[i-1].open;
        if (list[i].id != 4 && list[i].id != 8 && list[i].id != 12 && list[i].id != 16)
        list[i+1].open = !list[i+1].open;
        if (list[i].id != 1 && list[i].id != 2 && list[i].id != 3 && list[i].id != 4)
        list[i-4].open = ! list[i-4].open;
        if (list[i].id != 13 && list[i].id != 14 && list[i].id != 15 && list[i].id != 16)
        list[i+4].open = ! list[i+4].open;
      }
    }
    this.setData({list: list});
    if (list[0].open && list[1].open && list[2].open && list[3].open && list[4].open && list[5].open && list[6].open && list[7].open && list[8].open && list[9].open && list[10].open && list[11].open && list[12].open && list[13].open && list[14].open && list[15].open) wx.showToast({
      title: 'Success'
    });  
  },
  check: function (e) {
   // for (var i = 0; i < list.length; i++) {
   //   if (!list[i].open) return true;
  //  }
    return true;
  }

})