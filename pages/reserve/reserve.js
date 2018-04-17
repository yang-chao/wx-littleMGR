// pages/reserve/reserve.js
var that
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
      "11:40",
      "12:00",
      "14:00",
      "14:20",
      "14:40"
    ],
    arrange: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    console.log(options.query)
    requestArrange("20180909");
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

  openSchedule: function (event) {
    wx.navigateTo({
      url: '../schedule/schedule?schedule=' + JSON.stringify(event.currentTarget.dataset.schedule)
    });
  }
})

function requestArrange(date) {
  wx.request({
    url: 'http://localhost:8000/cdmanager/arrange/' + date,
    data: {
      // x: '',
      // y: ''
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      console.log(res.data)
      for (var j = 0; j < res.data.length; j++) {
        var scheduleList = [];
        for (var i = 0; i < that.data.timeList.length; i++) {
          var schedule = {};
          schedule["timeIndex"] = -1;
          scheduleList.push(schedule)
        }

        var scheduleByFT = res.data[j];
        for (var i = 0; i < scheduleByFT.schedule.length; i++) {
          if (scheduleByFT.schedule[i].timeIndex < scheduleList.length) {
            scheduleList[scheduleByFT.schedule[i].timeIndex] = scheduleByFT.schedule[i];
          }
        }
        res.data[j].schedule = scheduleList

        console.log(res.data)
      }

      that.setData({
        arrange: res.data
      })
    }
  })
}