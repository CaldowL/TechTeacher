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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_0,
    c: common_assets._imports_0,
    d: common_assets._imports_0,
    e: common_assets._imports_0,
    f: common_assets._imports_0,
    g: common_assets._imports_0,
    h: common_assets._imports_0,
    i: common_assets._imports_0,
    j: common_vendor.s("height: " + String($data.today_height - 10) + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
