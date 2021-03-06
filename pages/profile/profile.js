// pages/profile/profile.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fts: [
      { name: 'Audrey', value: 'Audrey' },
      { name: 'Brint', value: 'Brint' },
      { name: 'Charlotte', value: 'Charlotte' },
      { name: 'Kaseryn', value: 'Kaseryn' },
      { name: 'Mel', value: 'Mel' },
      { name: 'Shelley', value: 'Shelley' },
      { name: 'Vanessa', value: 'Vanessa' }
    ],
    role: 0
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    wx.setStorageSync('ft_name', e.detail.value)
    wx.redirectTo({
      url: '../index/index',
    })
  },

  onSubmit: function(e) {
    wx.setStorage({
      key: 'cd_name',
      data: e.detail.value.cd_name,
      success: function() {
        wx.redirectTo({
          url: '../index/index',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      role: app.globalData.role
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

  }
})