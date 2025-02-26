"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/teacher/home/home.js";
  "./pages/teacher/course/course.js";
  "./pages/teacher/messages/messages.js";
  "./pages/teacher/mine/mine.js";
  "./pages/teacher/mine/fill-info.js";
  "./pages/teacher/mine/to-fin.js";
  "./pages/teacher/mine/have-fined.js";
  "./pages/teacher/mine/courses.js";
  "./pages/teacher/course/class-detail.js";
  "./pages/teacher/course/grades-fast-in.js";
  "./pages/teacher/mine/lv.js";
  "./pages/teacher/messages/comment.js";
  "./pages/student/main.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
