// pages/schedule/schedule.js
const api = require("../../constants/api.js")
const util = require("../../utils/util.js")

var that
Page({
  /**
   * 页面的初始数据
   */
  data: {
    eventIndex: 0,
    studioIndex: 0,
    slotIndex: -1,
    slotTime: "",
    schedule: {},
    ft: '',
    eventArray: ['Audio', 'Video'],
    studioArray: ['F16', 'F25'],
    date: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    console.log(options)
    this.setData({
      schedule: JSON.parse(options.schedule),
      slotIndex: options.slotIndex,
      slotTime: util.getSlotTime(options.slotIndex),
      ft: options.ft,
      date: options.date
    })
    if (this.data.schedule.slotIndex < 0) {
      wx.showLoading({
        title: '加载中...',
        success: function() {
          getStudioStatus()
        }
      })
    }
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

  cancelSchedule: function () {
    wx.navigateBack({
      url: "../reserve/reserve"
    })
  },

  // 提交预约
  submitSchedule: function (e) {
    if (!e.detail.value.cd) {
      wx.showModal({
        content: 'Please enter CD name',
        showCancel: false,
        confirmText: "Confirm"
      })
      return
    }
    if (this.data.studioArray.length == 0) {
      wx.showModal({
        content: 'No studio available',
        showCancel: false,
        confirmText: "Confirm"
      })
      return
    }

    wx.request({
      url: api.schedule + "add",
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
         'cd': e.detail.value.cd,
         'ft': e.detail.value.ft,
         'slot_index': this.data.slotIndex,
         'event': this.data.eventArray[e.detail.value.event],
         'studio': this.data.studioArray[e.detail.value.studio],
         'date': this.data.date
      },
      success: function (res) {
        if (res.data.code == 1) {
          wx.showToast({
            title: 'Schedule successfully!'
          })
          wx.navigateBack({
            url: "../reserve/reserve?refresh=1"
          })
        }
      },
      fail: function() {

      },
      complete: function() {
        
      }
    })
  },

  bindEventChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      eventIndex: e.detail.value
    })
  },

  bindStudioChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      studioIndex: e.detail.value
    })
  },
})

function getStudioStatus() {
  wx.request({
    url: api.studioStatus + that.data.date + '/' + that.data.slotIndex,
    success: function (res) {
      console.log("get studio status")
      console.log(res.data)
      var newStudioArray = []
      var studioArray = that.data.studioArray
      var inUse
      for (var i in studioArray) {
        inUse = false
        for (var j in res.data) {
          if (studioArray[i] == res.data[j]) {
            inUse = true
            break
          }
        }
        if (!inUse) {
          newStudioArray.push(studioArray[i])
        }
      }
      that.setData({
        studioArray: newStudioArray
      })
    },
    complete: function() {
      wx.hideLoading()
    }
  })
}