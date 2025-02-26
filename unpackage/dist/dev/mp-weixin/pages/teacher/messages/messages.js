"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      status_colors: ["#A6BEED", "#F7EFCB"],
      status_index: 0,
      msg_list: [],
      show_msg: "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴"
    };
  },
  onLoad() {
    common_vendor.watch(this.status_index, (n) => {
      console.log(n);
    });
    this.demoList();
  },
  watch: {
    status_index: {
      handler(newValue, oldValue) {
        common_vendor.index.setNavigationBarColor({
          backgroundColor: this.status_colors[this.status_index],
          frontColor: "#ffffff"
        });
      },
      immediate: true
    }
  },
  methods: {
    demoList() {
      this.msg_list = {
        "notice": [
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "公告",
            "unfold": false
          },
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "公告",
            "unfold": false
          },
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "公告",
            "unfold": false
          }
        ],
        "other": [
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "公告其他测试消息",
            "unfold": false
          },
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "其他测试消息",
            "unfold": false
          },
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "其他测试消息",
            "unfold": false
          },
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "其他测试消息",
            "unfold": false
          },
          {
            "date": "3",
            "msg": "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
            "title": "其他测试消息",
            "unfold": false
          }
        ]
      };
    },
    open(item) {
      console.log(item);
      this.show_msg = item.msg;
      this.$refs.popup.open();
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.status_index == 1 ? "opt button_style_1" : "opt button_style_0"),
    b: common_vendor.o(($event) => $data.status_index = 0),
    c: common_vendor.n($data.status_index == 0 ? "opt button_style_1" : "opt button_style_0"),
    d: common_vendor.o(($event) => $data.status_index = 1),
    e: common_vendor.f($data.msg_list[$data.status_index == 0 ? "notice" : "other"], (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.msg),
        c: common_vendor.o(($event) => $options.open(item))
      };
    }),
    f: $data.status_index == 0 ? "/static/notice_icon.png" : "/static/notice_icon2.png",
    g: common_assets._imports_1$1,
    h: common_vendor.t($data.show_msg),
    i: common_vendor.sr("popup", "0d71fa42-0"),
    j: common_vendor.p({
      type: "bottom",
      ["border-radius"]: "10px 10px 10px 10px"
    }),
    k: common_vendor.s("background: linear-gradient(to bottom," + $data.status_colors[$data.status_index] + ", #F0F0F0 50%, #F0F0F0 50%);")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
