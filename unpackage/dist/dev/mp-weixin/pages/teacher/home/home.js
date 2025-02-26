"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      status_index: 0,
      theme_color: "#F0F0F0",
      banner_title: "记叙文三种题型",
      banner_date: "今天 14:00 - 15:00",
      banner_place: "213室 • 88人",
      banner_btn: "去点名",
      banner_tip: "已经开始上课了，快点名吧",
      today_height: 0,
      todoList: [],
      todayOtherList: [],
      time_left: 8920,
      time_left_obj: {},
      status_colors: [
        {
          "background": "#F0F0F0",
          "banner_in": "#F7F7F7",
          "banner_out": "#E9E9E9",
          "button": "#FF743C",
          "button-font": "#FFFFFF",
          "font": "#FF743C",
          "btn": "查看上节课",
          "tip": "最近一次课的点名时间还没到呢"
        },
        {
          "background": "#F7EFCB",
          "banner_in": "#FFF4C1",
          "banner_out": "#FEEB97",
          "button": "#FFFFFF",
          "button-font": "#000000",
          "font": "#FF743C",
          "btn": "去点名",
          "tip": "倒计时即将结束，快去点名吧！"
        },
        {
          "background": "#F7EFCB",
          "banner_in": "#F9E58E",
          "banner_out": "#EDC307",
          "button": "#EDC307",
          "button-font": "#000000",
          "font": "#FF743C",
          "btn": "去点名",
          "tip": "已经开始上课了，快点名吧！"
        },
        {
          "background": "#A6BEED",
          "banner_in": "#C1D2E7",
          "banner_out": "#548CFF",
          "button": "#548CFF",
          "button-font": "#FFFFFF",
          "font": "#FFFFFF",
          "btn": "去修改",
          "tip": "点名审核中，倒计时结束自动提交"
        },
        {
          "background": "#FFC9C9",
          "banner_in": "#FFC9A1",
          "banner_out": "#FF743C",
          "button": "#FF743C",
          "button-font": "#FFFFFF",
          "font": "#FFFFFF",
          "btn": "申请补回",
          "tip": "点名已结束，点击申请补回点名"
        },
        {
          "background": "#A2EBE6",
          "banner_in": "#A3E2C9",
          "banner_out": "#00BAAD",
          "button": "#FFF8D9",
          "button-font": "#000000",
          "font": "#FFF8D9",
          "btn": "去查看",
          "tip": "已点名，点击查看或申请更正"
        }
      ]
    };
  },
  onLoad() {
    this.status_index = 5;
    this.changeThemeColor();
    this.countDown();
  },
  mounted() {
    this.getTodayPos();
  },
  onReady() {
    for (var i = 0; i < 10; i++) {
      this.todoList.push({
        "title": "文学类文本阅读",
        "date": "12月30日",
        "time": "13:00-15:00",
        "btn": "笔记待提交"
      });
    }
    for (var i = 0; i < 10; i++) {
      this.todayOtherList.push({
        "title": "文学类文本阅读",
        "time": "13:00-15:00",
        "btn": "课程未开始"
      });
    }
  },
  methods: {
    changeThemeColor() {
      common_vendor.index.setNavigationBarColor({
        backgroundColor: this.status_colors[this.status_index]["background"],
        frontColor: "#ffffff"
      });
    },
    getGreeting() {
      const now = /* @__PURE__ */ new Date();
      const hours = now.getHours();
      let greeting;
      if (hours >= 0 && hours < 6) {
        greeting = "凌晨好";
      } else if (hours >= 6 && hours < 9) {
        greeting = "早上好";
      } else if (hours >= 9 && hours < 12) {
        greeting = "上午好";
      } else if (hours >= 12 && hours < 14) {
        greeting = "中午好";
      } else if (hours >= 14 && hours < 18) {
        greeting = "下午好";
      } else {
        greeting = "晚上好";
      }
      const month = now.getMonth() + 1;
      const date = now.getDate();
      return `${greeting}，今天是${month}月${date}日 👋`;
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
    convertSeconds(seconds) {
      if (seconds <= 0)
        return;
      let hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      let minutes = Math.floor(seconds / 60);
      seconds %= 60;
      return {
        "hour": hours,
        "minute": minutes,
        "second": seconds
      };
    },
    countDown() {
      var that = this;
      setInterval(() => {
        that.time_left_obj = that.convertSeconds(that.time_left--);
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.getGreeting()),
    b: "/static/flag_" + String($data.status_index) + ".png",
    c: common_vendor.t($data.banner_title),
    d: common_vendor.t($data.banner_date),
    e: common_vendor.t($data.banner_place),
    f: common_vendor.t($data.status_colors[$data.status_index]["btn"]),
    g: common_vendor.s("background-color:" + $data.status_colors[$data.status_index]["button"] + ";color:" + $data.status_colors[$data.status_index]["button-font"] + ";"),
    h: common_vendor.t($data.time_left_obj.hour),
    i: common_vendor.t($data.time_left_obj.minute),
    j: common_vendor.t($data.time_left_obj.second),
    k: common_vendor.s("background-color:" + $data.status_colors[$data.status_index]["banner_in"] + ";"),
    l: common_assets._imports_0,
    m: common_vendor.t($data.status_colors[$data.status_index]["tip"]),
    n: common_vendor.s("color: " + $data.status_colors[$data.status_index]["font"] + ";"),
    o: common_vendor.s("background-color:" + $data.status_colors[$data.status_index]["banner_in"] + ";"),
    p: common_vendor.s("background-color:" + $data.status_colors[$data.status_index]["banner_out"] + ";"),
    q: common_vendor.f($data.todoList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.date),
        c: common_vendor.t(item.time),
        d: common_vendor.t(item.btn)
      };
    }),
    r: common_vendor.f($data.todayOtherList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.person),
        d: common_vendor.t(item.btn)
      };
    }),
    s: common_vendor.s("height: " + String($data.today_height) + "px;"),
    t: common_vendor.s("background: linear-gradient(to bottom, " + $data.status_colors[$data.status_index]["background"] + ", #F0F0F0 50%, #F0F0F0 50%);")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
