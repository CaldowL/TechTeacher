"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    common_vendor.index.setStorageSync("openid", "11");
  },
  methods: {
    getPhoneNumber(s) {
      console.log(s);
    },
    login() {
      common_vendor.index.setStorageSync("openid", "aabb");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.login && $options.login(...args)),
    c: common_vendor.o((...args) => $options.getPhoneNumber && $options.getPhoneNumber(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
