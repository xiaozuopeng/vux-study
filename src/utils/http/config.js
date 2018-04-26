;
var _prefix = "http://";
var domain = "gank.io";
var BASEURL = _prefix + domain ;

// var url = window.location.href;
// var domain = url.split("/")[2];

var APP_ID = "wxb6696e67b67e863a";//正式

var FILEBASE = _prefix + "//file.huaaotech.com/";

var config = {
  GLOBAL_BASE: BASEURL,
  GLOBAL_API_DOMAIN: BASEURL + "/api",
  domain: domain,
  FILEBASE: FILEBASE,
  imgbaseurl: FILEBASE + "upload/",
  db_prefix: "xzp_wx_gbl_",
  APP_ID: APP_ID
};

module.exports = config;
