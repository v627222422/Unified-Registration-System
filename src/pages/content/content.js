// pages/content/content.js

Page({
  data: {
    showModal: false,
    isShowDis:[false,false],
    dataList:{},
    // dataList:[
    //   {
    //     name: '姓名',
    //     type: 'text',
    //     defaultValue:null,
    //     description:'1-4个字符',
    //     tip:'真实姓名',
    //     require: true,
    //     case:null,
    //     range:null,
    //     subItem:null
    //   },
    //   {
    //     name: '学号',
    //     type: 'number',
    //     defaultValue: null,
    //     description: '30位以内纯数字',
    //     tip: '',
    //     require: true,
    //     case: null,
    //     range: null,
    //     subItem: null
    //   }
    // ],
    stateList: [false, false]
  },
  
  onLoad: function () {
    var that=this;
    wx.request({
      url: 'https://www.turing-cup.online/voteapp/activity/3',
      data: {
        
      },
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({ dataList: res.data });
        console.log(res.data)
        var datalist = res.data;
        var isShow = that.data.isShowDis;
        var state = that.data.stateList
        for (var i = 0; i < datalist.length; i++) {
          isShow[i] = false;
          state[i] = false;

          console.log(i)
        }

        that.setData({
          isShowDis: isShow,
          stateList: state

        })

      }
    })
    
    
  },
  addDis(event){
    var s=true;
    var iss = this.data.isShowDis;
    var index = event.currentTarget.dataset.index;
    var playDIS = "isShowDis[" + index + "]";
    if (iss[index] == false) {
      s = true;
    }
    else {
      s = false;
    }
   
    this.setData({
      [playDIS]:s
    })
  },
  showDialogBtn: function () {
    this.setData({
      showModal: true
    });
  },
  hideModal: function () {
    this.setData({
      showModal: false
    });
  }

})
