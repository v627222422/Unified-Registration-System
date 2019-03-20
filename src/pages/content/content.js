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
    stateList: [false, true]
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
      }
    })
    
    
  },
  addDis(event){
    var s=true;
    var iss = this.data.isShowDis;
    var index = event.currentTarget.dataset.index;
    var playDIS = "isShowDis[" + 0 + "]";
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
