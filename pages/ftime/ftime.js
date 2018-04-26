// pages/ftime/ftime.js
const api = require("../../constants/api.js")
const config = require("../../constants/config.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slotTable: [],
    slotStatus: [],
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var slotList = config.timeSlots
    var slotStatus = []
    for (var i = 0; i < slotList.length; i++) {
      slotStatus.push(-2) // -1表示可预约，-2表示不可预约默认不可预约
    }
    var slotTable = []
    for (var i = 0; i <= slotList.length / 4; i++) {
      var slotRow = slotList.slice(i * 4, i * 4 + 4)
      slotTable.push(slotRow)
    }
    this.setData({
      date: options.date,
      slotTable: slotTable,
      slotStatus: slotStatus
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onTimeSelect: function (event) {
    var column = event.currentTarget.dataset.column
    var row = event.currentTarget.dataset.row
    var slotStatus = this.data.slotStatus
    var index = (column * 4) + row
    console.log('column: ' + column + ' row: ' + row + ' index: ' + index)
    if (slotStatus[index] == -2) {
      slotStatus[index] = -1
    } else {
      slotStatus[index] = -2
    }
    console.log(slotStatus)
    this.setData({
      slotStatus: slotStatus
    })
  },

  onSubmit: function() {
    var ftName = wx.getStorageSync('ft_name')
    wx.request({
      url: api.slotUpdate,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'ft': ftName,
        'slot_index': this.data.slotStatus.join(),
        'date': this.data.date
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == 1) {
          wx.showToast({
            title: 'Update time table successfully!'
          })
          wx.navigateBack({
            url: "../index/index"
          })
        }
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  }
})