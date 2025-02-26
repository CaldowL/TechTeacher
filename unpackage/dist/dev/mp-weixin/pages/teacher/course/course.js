"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      status_index: 0,
      status_colors: ["#FFC9C9", "#A6BEED"],
      selected_date: "2024年09月",
      todayOtherList: [
        {
          "date": "09月14日（周五）",
          "list": [{
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "10/13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "10/13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "10/13人",
            "btn": "去查看"
          }]
        },
        {
          "date": "09月15日（周六）",
          "list": [{
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "10/13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "10/13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "10/13人",
            "btn": "去查看"
          }]
        }
      ],
      dateList: [],
      today_height: 0,
      todoNum: 88
    };
  },
  onLoad() {
    common_vendor.index.setNavigationBarColor({
      backgroundColor: this.status_colors[this.status_index],
      frontColor: "#ffffff"
    });
    for (var i = 0; i < 10; i++) {
      this.todayOtherList.push({
        "title": "文学类文本阅读",
        "time": "13:00-15:00",
        "btn": "课程未开始"
      });
    }
    this.dateList = this.generateRandomArray();
  },
  mounted() {
    this.getTodayPos();
  },
  methods: {
    changeDate(s) {
      s = s.detail.value;
      s = s.replace("-", "年") + "日";
      this.selected_date = s;
    },
    getTodayPos() {
      var that = this;
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select("#pos_today").boundingClientRect((data) => {
        var height = common_vendor.index.getWindowInfo().windowHeight;
        that.today_height = height - data.top;
        console.log(that.today_height);
      }).exec();
    },
    generateRandomArray() {
      let result = [];
      for (let i = 0; i < 20; i++) {
        let item = {
          date: Math.floor(Math.random() * 31) + 1,
          // 生成 1 到 31 之间的随机日期
          tip: Math.random() >= 0.5
          // 生成随机的布尔值
        };
        result.push(item);
      }
      return result;
    },
    generateRandomArray2() {
      let result = [];
      for (let i = 0; i < 20; i++) {
        let item = {
          date: Math.floor(Math.random() * 31) + 1,
          // 生成 1 到 31 之间的随机日期
          tip: Math.random() >= 0.5
          // 生成随机的布尔值
        };
        result.push(item);
      }
      return result;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.todoNum),
    b: common_assets._imports_0$1,
    c: common_vendor.t($data.selected_date),
    d: common_assets._imports_1,
    e: common_vendor.o((...args) => $options.changeDate && $options.changeDate(...args)),
    f: common_vendor.f($data.dateList, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.date),
        b: item.tip
      }, item.tip ? {} : {});
    }),
    g: common_vendor.f($data.todayOtherList, (itemm, index, i0) => {
      return {
        a: common_vendor.t(itemm.date),
        b: common_vendor.f(itemm.list, (item, index2, i1) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.time),
            c: common_vendor.t(item.person),
            d: common_vendor.t(item.btn)
          };
        })
      };
    }),
    h: common_vendor.s("height: " + String($data.today_height) + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
