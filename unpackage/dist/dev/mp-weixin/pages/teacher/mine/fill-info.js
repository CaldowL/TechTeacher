"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      sex_select: 0,
      // [none，男，女]
      input_name: "",
      input_birth: "",
      input_phone: "",
      input_phone_check: false
    };
  },
  onLoad() {
    common_vendor.watch(this.sex_select, (old_, new_) => {
      console.log(old_, new_);
    });
  },
  methods: {
    getSexFontColor(idx) {
      if (this.sex_select === 0) {
        return "#7E7E7E";
      }
      if (this.sex_select === 1) {
        return idx === 1 ? "#548CFF" : "#7E7E7E";
      }
      if (this.sex_select === 2) {
        return idx === 1 ? "#7E7E7E" : "#FF743C";
      }
    },
    chooseSex(idx) {
      this.sex_select = idx;
      common_vendor.index.setNavigationBarColor({
        backgroundColor: ["#DBDBDB", "#A6BEED", "#FFC9C9"][this.sex_select],
        frontColor: "#ffffff"
      });
    },
    getRefreshPic(idx) {
      if (this.sex_select === 0) {
        return "/static/refresh_0.png";
      }
      if (this.sex_select === 1) {
        return idx === 1 ? "/static/refresh_1.png" : "/static/refresh_0.png";
      }
      if (this.sex_select === 2) {
        return idx === 1 ? "/static/refresh_0.png" : "/static/refresh_2.png";
      }
    },
    getBorderClassNum(idx) {
      if (this.sex_select === 0) {
        return 0;
      }
      if (this.sex_select === 1) {
        return idx === 1 ? 1 : 0;
      }
      if (this.sex_select === 2) {
        return idx === 1 ? 0 : 2;
      }
    },
    inputName(s) {
      s = s.detail.value;
      this.input_name = s;
    },
    chooseData(s) {
      console.log(s);
      this.input_birth = s.detail.value;
    },
    checkPhoneNumber(phoneNumber) {
      let reg = /^1[3-9]\d{9}$/;
      return reg.test(phoneNumber);
    },
    inputPhone(s) {
      this.input_phone = s.detail.value;
      this.input_phone_check = this.checkPhoneNumber(this.input_phone);
    },
    getNextPic() {
      if (this.sex_select == 0) {
        return 0;
      }
      if (this.sex_select == 1 && this.input_birth !== "" && this.input_name != "" && this.input_phone_check) {
        return 1;
      }
      if (this.sex_select == 2 && this.input_birth !== "" && this.input_name != "" && this.input_phone_check) {
        return 2;
      }
      return 0;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.sex_select === 0 ? "/static/fill_no.png" : "/static/fill_ok.png",
    b: common_vendor.n("avatar_image_" + String($options.getBorderClassNum(1))),
    c: common_assets._imports_0$2,
    d: common_vendor.o(($event) => $options.chooseSex(1)),
    e: $options.getRefreshPic(1),
    f: common_vendor.s("position: relative;width: 250rpx;text-align: center;color:" + $options.getSexFontColor(1)),
    g: common_vendor.n("avatar_image_" + String($options.getBorderClassNum(2))),
    h: common_assets._imports_0$2,
    i: common_vendor.o(($event) => $options.chooseSex(2)),
    j: $options.getRefreshPic(2),
    k: common_vendor.s("position: relative;width: 250rpx;text-align: center;color:" + $options.getSexFontColor(2)),
    l: common_vendor.n("avatar_" + String($data.sex_select)),
    m: common_vendor.s("color:" + ["#000000", "#548CFF", "#FF743C"][$data.sex_select] + ";"),
    n: common_vendor.o((...args) => $options.inputName && $options.inputName(...args)),
    o: common_vendor.n("form-name-input_" + String($data.sex_select)),
    p: $data.input_name === "" ? "/static/fill_no.png" : "/static/fill_ok.png",
    q: common_vendor.s("color:" + ["#000000", "#548CFF", "#FF743C"][$data.sex_select] + ";"),
    r: $data.input_birth,
    s: common_vendor.o((...args) => $options.chooseData && $options.chooseData(...args)),
    t: common_vendor.n("form-name-input_" + String($data.sex_select)),
    v: $data.input_birth === "" ? "/static/fill_no.png" : "/static/fill_ok.png",
    w: common_vendor.s("color:" + ["#000000", "#548CFF", "#FF743C"][$data.sex_select] + ";"),
    x: common_vendor.o((...args) => $options.inputPhone && $options.inputPhone(...args)),
    y: common_vendor.n("form-name-input_" + String($data.sex_select)),
    z: $data.input_phone_check ? "/static/fill_ok.png" : "/static/fill_no.png",
    A: "/static/next_" + $options.getNextPic() + ".png",
    B: common_vendor.n("content_" + String($data.sex_select))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
