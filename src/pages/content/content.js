// pages/content/content.js

Page({
  data: {
    showModal: false,
    isShowDis:[false,false],
    dataList:[
      {
        name: '姓名',
        type: 'text',
        defaultValue:null,
        description:'1-4个字符',
        tip:'真实姓名',
        require: true,
        case:null,
        range:null,
        subItem:null
      },
      {
        name: '学号',
        type: 'number',
        defaultValue: null,
        description: '30位以内纯数字',
        tip: '',
        require: true,
        case: null,
        range: null,
        subItem: null
      }
    ],
    stateList: [false, true]
  },
  
  onLoad: function () {
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
