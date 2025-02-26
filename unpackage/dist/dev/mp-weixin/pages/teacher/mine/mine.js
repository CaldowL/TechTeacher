"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      today_height: 0
    };
  },
  onLoad() {
    this.getTodayPos();
  },
  methods: {
    getTodayPos() {
      var that = this;
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select("#pos_today").boundingClientRect((data) => {
        var height = common_vendor.index.getWindowInfo().windowHeight;
        that.today_height = height - data.top;
        console.log(that.today_height);
      }).exec();
    },
    routeTo(idx) {
      if (idx == 0) {
        common_vendor.index.navigateTo({
          url: "/pages/teacher/mine/to-fin"
        });
      } else if (idx == 1) {
        common_vendor.index.navigateTo({
          url: "/pages/teacher/mine/have-fined"
        });
      } else if (idx == 3) {
        common_vendor.index.navigateTo({
          url: "/pages/teacher/messages/comment"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1$2,
    c: common_assets._imports_2,
    d: common_vendor.o(($event) => $options.routeTo(0)),
    e: common_vendor.o(($event) => $options.routeTo(1)),
    f: common_assets._imports_3,
    g: common_vendor.o(($event) => $options.routeTo(3)),
    h: common_assets._imports_4,
    i: common_assets._imports_5,
    j: common_assets._imports_6,
    k: common_assets._imports_7,
    l: common_assets._imports_8,
    m: common_vendor.s("height: " + String($data.today_height) + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
