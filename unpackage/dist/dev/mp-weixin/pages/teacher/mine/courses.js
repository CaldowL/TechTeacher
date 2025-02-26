"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      selected_date: "2024年12月",
      today_height: 0,
      todayOtherList: [
        {
          "date": "14日（周五）",
          "list": [{
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "13人",
            "btn": "去查看"
          }]
        },
        {
          "date": "15日（周六）",
          "list": [{
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "13人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "103人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "1013人",
            "btn": "去查看"
          }]
        },
        {
          "date": "17日（周六）",
          "list": [{
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "113人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "113人",
            "btn": "去查看"
          }, {
            "title": "爱你爱你爱你",
            "time": "09:00-10:00",
            "person": "1013人",
            "btn": "去查看"
          }]
        }
      ]
    };
  },
  onLoad() {
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
    a: common_assets._imports_0,
    b: common_vendor.t($data.selected_date),
    c: common_assets._imports_1$3,
    d: common_vendor.o((...args) => $options.changeDate && $options.changeDate(...args)),
    e: common_vendor.f($data.todayOtherList, (itemm, index, i0) => {
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
    f: common_vendor.s("height: " + String($data.today_height - 5) + "px;"),
    g: common_vendor.sr("popup", "48c3d58e-0"),
    h: common_vendor.p({
      type: "bottom"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
