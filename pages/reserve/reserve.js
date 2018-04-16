// pages/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList: [
      "10:00",
      "10:20",
      "10:40",
      "11:00",
      "11:20",
      "11:40"
    ],
    arrange:[
      [
        {
          cd: "小明",
          ft: "Brint",
          time: "10:00",
          event: "音频",
          studio: "F16"
        },
        {
          cd: "小红",
          ft: "Brint",
          time: "10:20",
          event: "视频频",
          studio: "F25"
        }
      ],
      [
        {
          cd: "小明",
          ft: "Audrey",
          time: "10:00",
          event: "音频",
          studio: "F16"
        },
        {
          cd: "小红",
          ft: "Audrey",
          time: "10:20",
          event: "视频频",
          studio: "F25"
        }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  openSchedule: function () {
    wx.navigateTo({
      url: '../schedule/schedule' 
    });
  }
})