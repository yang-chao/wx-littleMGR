// pages/schedule/schedule.js
const util = require("../../utils/util.js")

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
    eventArray: ['Video', 'Audio'],
    studioArray: ['F16', 'F25']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      schedule: JSON.parse(options.schedule),
      slotIndex: options.slotIndex,
      slotTime: util.getSlotTime(options.slotIndex)
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

  cancelSchedule: function () {
    console.log("close schedule")
    wx.navigateBack({
      url: "../reserve/reserve"
    })
  },

  confirmSchedule: function () {
    // 提交预约

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