"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      selected_index: 0,
      today_height: 0,
      comment_list: [],
      comment_show: [],
      name: "苹果老师",
      count: 22,
      bg_colors: ["#FF743C", "#FDEA96", "#548BFE"],
      src_path: ["/static/comment_good.png", "/static/comment_ok.png", "/static/comment_bad.png"]
    };
  },
  onLoad() {
    this.getTodayPos();
    this.demo();
    this.changeType(0);
  },
  methods: {
    demo() {
      for (var i = 0; i < 100; i++) {
        this.comment_list.push({
          "name": "陈一一家长",
          "date": "24年09月19日",
          "content": "这是评价这是评价这是评价这是评价这是评价这是评价",
          "code": 2
        });
      }
    },
    changeType(idx) {
      this.selected_index = idx;
      this.comment_show = [];
      if (idx == 0) {
        this.comment_show = this.comment_list;
        return;
      }
      for (var index = 0; index < this.comment_list.length; index++) {
        var ele = this.comment_list[index];
        if (ele.code == idx - 1) {
          this.comment_show.push(ele);
        }
      }
    },
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.t($data.name),
    c: common_vendor.t($data.count),
    d: common_vendor.n($data.selected_index == 0 ? "opt button_style_selected" : "opt button_style"),
    e: common_vendor.o(($event) => $options.changeType(0)),
    f: common_vendor.n($data.selected_index == 1 ? "opt button_style_selected" : "opt button_style"),
    g: common_vendor.o(($event) => $options.changeType(1)),
    h: common_vendor.n($data.selected_index == 2 ? "opt button_style_selected" : "opt button_style"),
    i: common_vendor.o(($event) => $options.changeType(2)),
    j: common_vendor.n($data.selected_index == 3 ? "opt button_style_selected" : "opt button_style"),
    k: common_vendor.o(($event) => $options.changeType(3)),
    l: common_vendor.f($data.comment_show, (item, index, i0) => {
      return {
        a: $data.src_path[item.code],
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.date),
        d: common_vendor.s(item.code == 1 ? "color: black;" : "color: white;"),
        e: common_vendor.t(item.content),
        f: common_vendor.s(item.code == 1 ? "color: black;" : "color: white;"),
        g: common_vendor.s("background-color:" + $data.bg_colors[item.code] + ";")
      };
    }),
    m: common_assets._imports_1$1,
    n: common_vendor.s("height: " + String($data.today_height - 10) + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
