"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      today_height: 0,
      stu_list: []
    };
  },
  onLoad() {
    this.getTodayPos();
    this.demo_stu();
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
    demo_stu() {
      for (var i = 0; i < 30; i++) {
        this.stu_list.push({
          "name": "陈一二",
          "grade": "福建省第十五中学，初二年级"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$3,
    b: common_vendor.t($data.stu_list.length),
    c: common_vendor.f($data.stu_list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.grade)
      };
    }),
    d: common_assets._imports_0,
    e: common_assets._imports_1$1,
    f: common_vendor.s("height: " + String($data.today_height) + "px;")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
